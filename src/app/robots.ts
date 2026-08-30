import type { MetadataRoute } from "next";
import { basisUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("sitemap.xml", basisUrl).toString(),
  };
}
