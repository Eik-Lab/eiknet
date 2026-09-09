import assert from "node:assert/strict";
import test from "node:test";
import {
  formaterDato,
  getKommendeArrangementer,
  getPameldingVisning,
  getTidligereArrangementer,
  osloDato,
  parseDato,
} from "./arrangementer.ts";

test("parser og formaterer gyldige ISO-datoer", () => {
  assert.deepEqual(parseDato("2026-09-15"), {
    dag: "15",
    maaned: "sep",
    aar: "2026",
  });
  assert.equal(formaterDato("2026-09-15"), "15. sep 2026");
  assert.equal(parseDato("2026-02-30"), null);
  assert.equal(parseDato("15. sep 2026"), null);
});

test("bruker kalenderdatoen i Europe/Oslo", () => {
  assert.equal(osloDato(new Date("2026-09-14T21:59:59Z")), "2026-09-14");
  assert.equal(osloDato(new Date("2026-09-14T22:00:00Z")), "2026-09-15");
});

test("beholder arrangementet ut hele arrangementsdagen", () => {
  const underArrangementet = new Date("2026-09-15T21:59:59Z");
  const nesteOsloDogn = new Date("2026-09-15T22:00:00Z");

  assert.equal(
    getKommendeArrangementer(underArrangementet)[0]?.slug,
    "workshop-arduino"
  );
  assert.equal(
    getTidligereArrangementer(underArrangementet).some(
      (arrangement) => arrangement.slug === "workshop-arduino"
    ),
    false
  );
  assert.equal(
    getTidligereArrangementer(nesteOsloDogn)[0]?.slug,
    "workshop-arduino"
  );
});

test("sorterer kommende stigende og tidligere synkende", () => {
  assert.deepEqual(
    getKommendeArrangementer(new Date("2026-01-01T12:00:00Z")).map(
      (arrangement) => arrangement.slug
    ),
    [
      "workshop-arduino",
      "workshop-cad",
      "workshop-pcb",
      "workshop-frontend",
    ]
  );
  assert.deepEqual(
    getTidligereArrangementer(new Date("2027-01-01T12:00:00Z")).map(
      (arrangement) => arrangement.slug
    ),
    [
      "workshop-frontend",
      "workshop-pcb",
      "workshop-cad",
      "workshop-arduino",
    ]
  );
});

test("viser riktig tilstand for alle påmeldingsstatuser", () => {
  const referansetid = new Date("2026-01-01T12:00:00Z");
  const date = "2026-09-15";

  assert.deepEqual(
    getPameldingVisning({ date, pameldingStatus: "kommer" }, referansetid),
    { tekst: "Påmelding kommer", aktiv: false }
  );
  assert.deepEqual(
    getPameldingVisning(
      {
        date,
        pameldingStatus: "åpen",
        pameldingUrl: "https://example.com/pamelding",
      },
      referansetid
    ),
    {
      tekst: "Meld deg på",
      url: "https://example.com/pamelding",
      aktiv: true,
    }
  );
  assert.deepEqual(
    getPameldingVisning({ date, pameldingStatus: "drop-in" }, referansetid),
    { tekst: "Drop-in – ingen påmelding", aktiv: false }
  );
  assert.deepEqual(
    getPameldingVisning({ date, pameldingStatus: "stengt" }, referansetid),
    { tekst: "Påmeldingen er stengt", aktiv: false }
  );
  assert.deepEqual(
    getPameldingVisning(
      { date: "2025-09-15", pameldingStatus: "åpen" },
      referansetid
    ),
    { tekst: "Arrangementet er gjennomført", aktiv: false }
  );
});
