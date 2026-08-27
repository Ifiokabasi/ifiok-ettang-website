
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-content px-6 py-28 md:px-10 md:py-40"
    >
      {/* =========================
          SECTION HEADER
      ========================== */}
      <div className="mb-16 md:mb-24">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-red" />

          <p className="text-[10px] font-semibold tracking-[0.3em] text-muted">
            ABOUT IFIOK ETTANG
          </p>
        </div>

        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-poppins text-4xl font-semibold leading-[0.9] tracking-[-0.04em] text-paper sm:text-5xl md:gap-x-5 md:text-7xl">
          <span>FILMMAKER</span>

          <span className="text-red">.</span>

          <span>STORYTELLER</span>

          <span className="text-red">.</span>

          <span className="text-paper/45">JOURNO</span>
        </div>
      </div>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16 lg:gap-24">
        {/* =========================
            PORTRAIT
        ========================== */}
        <div className="group relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-white/[0.03]">
            <img
              src="/images/about/ifiok-portrait.jpg"
              alt="Ifiok Ettang"
              className="
                h-full
                w-full
                object-cover
                object-center
                grayscale-[15%]
                transition-all
                duration-[1400ms]
                ease-out
                group-hover:scale-[1.025]
                group-hover:grayscale-0
              "
            />

            {/* Cinematic overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/30
                via-transparent
                to-transparent
              "
            />

            {/* Portrait label */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-red" />

              <span className="text-[9px] font-medium tracking-[0.25em] text-white/70">
                IFIOK ETTANG
              </span>
            </div>

            {/* Year / identifier */}
            <span className="absolute right-6 top-6 font-poppins text-[9px] tracking-[0.25em] text-white/50">
              FILM · JOURNALISM
            </span>
          </div>
        </div>

        {/* =========================
            TEXT
        ========================== */}
        <div className="flex flex-col items-start">
          {/* Small intro */}
          <p className="mb-8 text-[10px] font-semibold tracking-[0.28em] text-muted">
            THE WORK
          </p>

          {/* Main statement */}
          <p
            className="
              max-w-xl
              font-inter
              text-2xl
              font-medium
              leading-[1.15]
              tracking-[-0.025em]
              text-paper
              md:text-3xl
              lg:text-4xl
            "
          >
            I&rsquo;m Ifiok Ettang, a Nigerian filmmaker and journalist.
            
          </p>

          {/* Secondary statement */}
          <p
            className="
              mt-7
              max-w-lg
              text-sm
              leading-[1.8]
              text-muted
              md:text-base
            "
          >
            I telling human stories through documentary, narrative film and
            visual journalism.
            After years working in international journalism, including at the
            BBC, I&rsquo;m building an independent filmmaking practice focused
            on people, culture, faith and the forces shaping our world.
          </p>

          {/* Divider */}
          <div className="my-9 h-px w-full max-w-lg bg-paper/10" />

          {/* Philosophy */}
          <div className="flex max-w-lg items-start gap-5">
            <span className="mt-2 h-px w-8 shrink-0 bg-red" />

            <p className="font-italiana text-xl leading-[1.25] text-paper/70 md:text-2xl">
              Stories are not simply what I make.
              <br />
              They are how I understand the world.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/about"
            className="
              group/link
              mt-10
              inline-flex
              items-center
              gap-4
              border-b
              border-paper/20
              pb-2
              font-poppins
              text-[10px]
              font-semibold
              tracking-[0.25em]
              text-paper
              transition-all
              duration-300
              hover:border-red
              hover:gap-6
            "
          >
            <span>MORE ABOUT ME</span>

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
      </div>

      {/* =========================
          BOTTOM STATEMENT
      ========================== */}
      <div className="mt-20 border-t border-paper/10 pt-6 md:mt-28 md:flex md:items-center md:justify-between">
        <p className="text-[9px] font-medium tracking-[0.25em] text-paper/25">
          FILMMAKER · STORYTELLER · JOURNALIST
        </p>

        <p className="mt-3 text-[9px] tracking-[0.2em] text-paper/20 md:mt-0">
          NIGERIA · AFRICA · BEYOND
        </p>
      </div>
    </section>
  );
}
