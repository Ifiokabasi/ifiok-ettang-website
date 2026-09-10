import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ifiokettang.com",
      lastModified: new Date(),
    },
    {
      url: "https://ifiokettang.com/documentaries",
      lastModified: new Date(),
    },
    {
      url: "https://ifiokettang.com/films",
      lastModified: new Date(),
    },
    {
      url: "https://ifiokettang.com/fieldnotes",
      lastModified: new Date(),
    },
    {
      url: "https://ifiokettang.com/contact",
      lastModified: new Date(),
    },
  ];
}