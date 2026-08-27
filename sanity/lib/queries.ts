import { client } from "./client";

export type FieldNote = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: any;
  body?: any;
};

const fieldNoteProjection = `{
  _id,
  title,
  "slug": slug.current,
  category,
  excerpt,
  publishedAt,
  coverImage
}`;

// Latest field note first, used as the "hero" note on the homepage.
export async function getLatestFieldNote(): Promise<FieldNote | null> {
  return client.fetch(
    `*[_type == "fieldNote"] | order(publishedAt desc)[0] ${fieldNoteProjection}`
  );
}

// The next N notes after the latest one, for the "More Notes" list.
export async function getMoreFieldNotes(limit = 3): Promise<FieldNote[]> {
  return client.fetch(
    `*[_type == "fieldNote"] | order(publishedAt desc)[1...${limit + 1}] ${fieldNoteProjection}`
  );
}

// All field notes, for the /fieldnotes index page.
export async function getAllFieldNotes(): Promise<FieldNote[]> {
  return client.fetch(
    `*[_type == "fieldNote"] | order(publishedAt desc) ${fieldNoteProjection}`
  );
}

// A single field note by slug, including full body content.
export async function getFieldNoteBySlug(
  slug: string
): Promise<FieldNote | null> {
  return client.fetch(
    `*[_type == "fieldNote" && slug.current == $slug][0] ${fieldNoteProjection.replace(
      "}",
      ", body }"
    )}`,
    { slug }
  );
}
