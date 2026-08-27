import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getFieldNoteBySlug, getAllFieldNotes } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const notes = await getAllFieldNotes();
    return notes.map((note) => ({ slug: note.slug }));
  } catch {
    return [];
  }
}

export default async function FieldNotePage({
  params,
}: {
  params: { slug: string };
}) {
  const note = await getFieldNoteBySlug(params.slug).catch(() => null);

  if (!note) {
    notFound();
  }

  return (
    <main className="bg-ink min-h-screen">
      <Navbar />
      <article className="mx-auto max-w-content px-6 py-24 md:px-10">
        <p className="text-sm font-bold tracking-[0.15em] text-muted">
          {note.category}
        </p>
        <h1 className="mt-4 font-inter text-4xl font-black text-paper sm:text-5xl md:text-6xl">
          {note.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          {new Date(note.publishedAt)
            .toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
            .toUpperCase()}
        </p>

        {note.coverImage && (
          <div className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={urlForImage(note.coverImage)?.width(1600).url()}
              alt={note.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert prose-lg mt-12 max-w-none prose-headings:font-inter prose-a:text-red">
          {note.body && <PortableText value={note.body} />}
        </div>
      </article>
      <Footer />
    </main>
  );
}
