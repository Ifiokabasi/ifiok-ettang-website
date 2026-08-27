import Link from "next/link";
import { getLatestFieldNote, getMoreFieldNotes } from "@/sanity/lib/queries";
import FieldNoteCard from "./FieldNoteCard";

// Shown only until real content exists in Sanity.
const placeholderNote = {
  _id: "placeholder",
  title: "What Journalism Taught Me About Directing Films",
  slug: "",
  category: "JOURNALISM",
  excerpt:
    "A short documentary exploring identity, beauty and belonging in Northern Nigeria.",
  publishedAt: new Date().toISOString(),
  coverImage: "/images/fieldnote-img1.jpg",
  alt: "Ifiok with colleagues",
};

function formatDate(dateString: string) {
  return new Date(dateString)
    .toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    })
    .toUpperCase();
}

export default async function FieldnotesSection() {
  let latest = null;
  let more: Awaited<ReturnType<typeof getMoreFieldNotes>> = [];

  try {
    [latest, more] = await Promise.all([
      getLatestFieldNote(),
      getMoreFieldNotes(3),
    ]);
  } catch {
    // Sanity isn't configured yet — use the placeholder below.
  }

  const heroNote = latest ?? placeholderNote;
  const isPlaceholder = !latest;

  return (
    <section
      id="field-notes"
      className="mx-auto max-w-content px-6 py-28 md:px-10 md:py-40"
    >
      {/* =========================
          SECTION HEADER
      ========================== */}
      <div className="relative mb-20 md:mb-28">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-red" />

          <p className="text-[10px] font-semibold tracking-[0.3em] text-muted">
            FROM THE FIELD
          </p>
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2
            className="
              font-inter
              text-7xl
              font-black
              leading-[0.8]
              tracking-[-0.07em]
              text-paper
              sm:text-8xl
              md:text-[9rem]
            "
          >
            Fieldnotes
          </h2>

          <p
            className="
              max-w-sm
              pb-2
              font-poppins
              text-sm
              leading-[1.6]
              text-paper/40
              md:text-right
              md:text-base
            "
          >
            Ideas, observations and lessons
            <br className="hidden md:block" />
            from the field.
          </p>
        </div>

        <div className="mt-10 h-px w-full bg-paper/10" />
      </div>

      {/* =========================
          FEATURED NOTE
      ========================== */}
      <div>
        {isPlaceholder ? (
          <article className="group relative">
            <div className="grid items-center gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
              {/* Text */}
              <div className="flex flex-col items-start">
                <div className="mb-9 flex w-full items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-red" />

                    <span className="text-[9px] font-semibold tracking-[0.32em] text-muted">
                      {heroNote.category}
                    </span>
                  </div>

                  <span className="font-poppins text-[9px] tracking-[0.28em] text-paper/20">
                    01
                  </span>
                </div>

                <h3
                  className="
                    max-w-xl
                    font-inter
                    text-4xl
                    font-semibold
                    leading-[0.9]
                    tracking-[-0.05em]
                    text-paper
                    md:text-5xl
                    lg:text-[4.25rem]
                  "
                >
                  {heroNote.title}
                </h3>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px w-5 bg-paper/20" />

                  <p className="text-[9px] font-medium tracking-[0.25em] text-paper/30">
                    FIELD NOTE
                  </p>
                </div>

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
                  {heroNote.excerpt}
                </p>

                <div
                  className="
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
                    text-paper/50
                  "
                >
                  <span>COMING SOON</span>
                </div>

                <p className="mt-7 max-w-sm text-[9px] leading-[1.7] tracking-wide text-paper/20">
                  Connect Sanity and publish a Field Note to replace this
                  placeholder.
                </p>
              </div>

              {/* Image */}
              <div className="group/image relative">
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-white/[0.03]">
                  <img
                    src={heroNote.coverImage}
                    // alt={heroNote.alt}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-[1600ms]
                      ease-out
                      group-hover/image:scale-[1.04]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/40
                      via-black/5
                      to-transparent
                    "
                  />

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
                    01
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-20 h-px w-full bg-paper/10 md:mt-32" />
          </article>
        ) : (
          <FieldNoteCard note={heroNote} index={0} />
        )}
      </div>

      {/* =========================
          MORE NOTES
      ========================== */}
      {more.length > 0 && (
        <div className="mt-24 md:mt-32">
          {/* Subheading */}
          <div className="mb-12 flex items-end justify-between border-b border-paper/10 pb-6 md:mb-16">
            <div>
              <p className="mb-3 text-[9px] font-semibold tracking-[0.3em] text-paper/30">
                ARCHIVE
              </p>

              <h3
                className="
                  font-inter
                  text-3xl
                  font-semibold
                  tracking-[-0.04em]
                  text-paper
                  md:text-4xl
                "
              >
                More Notes
              </h3>
            </div>

            <span className="hidden text-[9px] tracking-[0.25em] text-paper/20 sm:block">
              {String(more.length).padStart(2, "0")} STORIES
            </span>
          </div>

          {/* Notes */}
          <div className="flex flex-col">
            {more.map((note, index) => (
              <article
                key={note._id}
                className="
                  group
                  grid
                  gap-6
                  border-b
                  border-paper/10
                  py-8
                  transition-opacity
                  duration-300
                  hover:opacity-70
                  md:grid-cols-[80px_1fr_auto]
                  md:items-center
                  md:gap-10
                  md:py-10
                "
              >
                {/* Number */}
                <span className="font-poppins text-[9px] tracking-[0.25em] text-paper/20">
                  {String(index + 2).padStart(2, "0")}
                </span>

                {/* Content */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-5 bg-red" />

                    <p className="text-[9px] font-semibold tracking-[0.25em] text-muted">
                      {note.category}
                    </p>
                  </div>

                  <Link href={`/fieldnotes/${note.slug}`}>
                    <h4
                      className="
                        max-w-2xl
                        font-inter
                        text-xl
                        font-medium
                        leading-[1.05]
                        tracking-[-0.025em]
                        text-paper
                        md:text-2xl
                      "
                    >
                      {note.title}
                    </h4>
                  </Link>

                  <p className="mt-3 text-[9px] tracking-[0.22em] text-paper/25">
                    {formatDate(note.publishedAt)}
                  </p>
                </div>

                {/* Read */}
                <Link
                  href={`/fieldnotes/${note.slug}`}
                  className="
                    group/link
                    flex
                    w-fit
                    items-center
                    gap-3
                    border-b
                    border-paper/15
                    pb-2
                    font-poppins
                    text-[9px]
                    font-semibold
                    tracking-[0.25em]
                    text-paper/60
                    transition-all
                    duration-300
                    hover:gap-5
                    hover:border-red
                    hover:text-paper
                  "
                >
                  <span>READ</span>

                  <span
                    aria-hidden
                    className="
                      text-sm
                      transition-transform
                      duration-300
                      group-hover/link:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* =========================
          VIEW ALL
      ========================== */}
      <div className="mt-16 flex justify-start md:mt-20">
        <Link
          href="/fieldnotes"
          className="
            group
            inline-flex
            items-center
            gap-5
            border
            border-paper/20
            px-7
            py-4
            font-poppins
            text-[9px]
            font-semibold
            tracking-[0.25em]
            text-paper
            transition-all
            duration-300
            hover:gap-7
            hover:border-paper/50
          "
        >
          <span>VIEW ALL FIELD NOTES</span>

          <span
            aria-hidden
            className="
              text-sm
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}