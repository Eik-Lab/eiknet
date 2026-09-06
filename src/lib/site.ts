const lokalUrl = "http://localhost:3000";

/** Basenettadresse for sidens absolutte URL-er (metadata, robots, sitemap). */
function lesBasisUrl(): URL {
  const konfigurertUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!konfigurertUrl) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL må være satt til en gyldig HTTPS-adresse i produksjon."
      );
    }
    return new URL(lokalUrl);
  }

  let url: URL;
  try {
    url = new URL(konfigurertUrl);
  } catch {
    throw new Error("NEXT_PUBLIC_SITE_URL er ikke en gyldig URL.");
  }

  const erLokal = url.hostname === "localhost" || url.hostname === "127.0.0.1";
  if (process.env.NODE_ENV === "production" && (url.protocol !== "https:" || erLokal)) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL må bruke HTTPS og kan ikke peke til localhost i produksjon."
    );
  }

  return url;
}

export const basisUrl = lesBasisUrl();

/** Returnerer en canonical URL relativt til den validerte produksjonsadressen. */
export function canonicalUrl(sti: string): string {
  return new URL(sti, basisUrl).toString();
}
