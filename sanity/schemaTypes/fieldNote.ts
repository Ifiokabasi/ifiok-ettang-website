import { defineField, defineType } from "sanity";

export default defineType({
  name: "fieldNote",
  title: "Field Note",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      description:
        'Shown as the small eyebrow label, e.g. "JOURNALISM", "FIELD", "BUILDING".',
      type: "string",
      options: {
        list: [
          { title: "Journalism", value: "JOURNALISM" },
          { title: "Filmmaking", value: "FILMMAKING" },
          { title: "Field", value: "FIELD" },
          { title: "Building", value: "BUILDING" },
        ],
      },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "Short summary shown on cards and previews.",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage",
    },
  },
});
