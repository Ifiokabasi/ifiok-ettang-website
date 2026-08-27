import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import type { FieldNote } from "@/sanity/lib/queries";

function formatDate(dateString: string) {
  return new Date(dateString)
    .toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })
    .toUpperCase();
}

export default function FieldNoteCard({
  note,
  index,
}: {
  note: FieldNote;
  index?: number;
}) {
  const number =
    index !== undefined ? String(index + 1).padStart(2, "0") : null;

  return (
    <article className="group relative">
      <div className="grid items-center gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
        {/* =========================
            TEXT
        ========================== */}
        <div className="flex flex-col items-start">
          {/* Editorial metadata */}
          <div className="mb-9 flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-red" />

              <span className="text-[9px] font-semibold tracking-[0.32em] text-muted">
                {note.category}
              </span>
            </div>

            {number && (
              <span className="font-poppins text-[9px] tracking-[0.28em] text-paper/20">
                {number}
              </span>
            )}
          </div>

          {/* Title */}
          <Link
            href={`/fieldnotes/${note.slug}`}
            className="block max-w-xl"
          >
            <h3
              className="
                font-inter
                text-4xl
                font-semibold
                leading-[0.9]
                tracking-[-0.05em]
                text-paper
                transition-opacity
                duration-500
                group-hover:opacity-70
                sm:text-5xl
                lg:text-[4.25rem]
              "
            >
              {note.title}
            </h3>
          </Link>

          {/* Date */}
          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-5 bg-paper/20" />

            <p className="text-[9px] font-medium tracking-[0.25em] text-paper/30">
              {formatDate(note.publishedAt)}
            </p>
          </div>

          {/* Excerpt */}
          {note.excerpt && (
            <p
              className="
                mt-8
                max-w-md
                text-sm
                leading-[1.8]
                text-muted
                md:text-base
              "
            >
              {note.excerpt}
            </p>
          )}

          {/* CTA */}
          <Link
            href={`/fieldnotes/${note.slug}`}
            className="
              group/link
              mt-10
              inline-flex
              items-center
              gap-4
              border-b
              border-paper/20
              pb-2.5
              font-poppins
              text-[9px]
              font-semibold
              tracking-[0.28em]
              text-paper
              transition-all
              duration-300
              hover:gap-6
              hover:border-red
            "
          >
            <span>READ NOTE</span>

            <span
              aria-hidden
              className="
                text-sm
                leading-none
                transition-transform
                duration-300
                group-hover/link:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>

        {/* =========================
            IMAGE
        ========================== */}
        {note.coverImage ? (
          <Link
            href={`/fieldnotes/${note.slug}`}
            aria-label={`Read ${note.title}`}
            className="group/image relative block"
          >
            <div
              className="
                relative
                aspect-[16/11]
                w-full
                overflow-hidden
                bg-white/[0.03]
              "
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  urlForImage(note.coverImage)
                    ?.width(1600)
                    .height(1100)
                    .url()
                }
                alt={note.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1600ms]
                  ease-[cubic-bezier(0.2,0.65,0.2,1)]
                  group-hover/image:scale-[1.04]
                "
              />

              {/* Cinematic overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-black/5
                  to-transparent
                  opacity-80
                  transition-opacity
                  duration-700
                  group-hover/image:opacity-40
                "
              />

              {/* Image hover label */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  flex
                  translate-y-3
                  items-center
                  gap-3
                  opacity-0
                  transition-all
                  duration-500
                  group-hover/image:translate-y-0
                  group-hover/image:opacity-100
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red" />

                <span className="text-[9px] font-medium tracking-[0.28em] text-white">
                  READ NOTE
                </span>

                <span className="text-sm text-white/80">→</span>
              </div>

              {/* Image number */}
              {number && (
                <span
                  className="
                    absolute
                    right-5
                    top-5
                    font-poppins
                    text-[9px]
                    tracking-[0.28em]
                    text-white/45
                  "
                >
                  {number}
                </span>
              )}
            </div>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      {/* Editorial divider */}
      <div className="mt-20 h-px w-full bg-paper/10 md:mt-32" />
    </article>
  );
}