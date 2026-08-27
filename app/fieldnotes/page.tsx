import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllFieldNotes } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function FieldnotesIndexPage() {
  let notes: Awaited<ReturnType<typeof getAllFieldNotes>> = [];
  try {
    notes = await getAllFieldNotes();
  } catch {
    notes = [];
  }

  return (
    <main className="bg-ink min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-content px-6 py-24 md:px-10">
        <h1 className="font-inter text-6xl font-black text-paper sm:text-7xl md:text-8xl">
          Fieldnotes
        </h1>
        <p className="mt-4 font-poppins text-xl font-medium text-paper/70 md:text-3xl">
          Ideas, observations and lessons from the field.
        </p>

        <div className="mt-16 flex flex-col gap-12">
          {notes.length === 0 && (
            <p className="text-muted">
              No field notes published yet. Add one in Sanity Studio at{" "}
              <code>/studio</code>.
            </p>
          )}

          {notes.map((note) => (
            <div key={note._id} className="flex flex-col gap-6">
              <div className="hairline" />
              <p className="text-sm font-bold tracking-[0.15em] text-muted">
                {note.category}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="text-2xl font-bold text-paper md:text-3xl">
                    {note.title}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {new Date(note.publishedAt)
                      .toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })
                      .toUpperCase()}
                  </p>
                </div>
                <Link
                  href={`/fieldnotes/${note.slug}`}
                  className="inline-flex items-center gap-3 rounded-lg bg-red px-9 py-3 font-poppins text-sm font-bold tracking-[0.1em] text-paper"
                >
                  READ →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
