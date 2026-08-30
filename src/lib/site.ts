/** Basenettadresse for sidens absolutte URL-er (metadata, robots, sitemap). */
export const basisUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
);
