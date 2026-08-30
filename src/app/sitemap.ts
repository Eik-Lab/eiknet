import type { MetadataRoute } from "next";
import { getAllArrangementer } from "@/lib/arrangementer";
import { getAllProsjekter } from "@/lib/prosjekter";
import { basisUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const statiske = ["", "/om", "/prosjekter", "/arrangementer", "/alumni", "/mentorer", "/kontakt"].map(
    (sti) => ({
      url: new URL(sti, basisUrl).toString(),
      changeFrequency: "weekly" as const,
      priority: sti === "" ? 1 : 0.7,
    })
  );

  const prosjekter = getAllProsjekter().map((p) => ({
    url: new URL(`/prosjekter/${p.slug}`, basisUrl).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const arrangementer = getAllArrangementer().map((a) => ({
    url: new URL(`/arrangementer/${a.slug}`, basisUrl).toString(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...statiske, ...prosjekter, ...arrangementer];
}
