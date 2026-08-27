
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-content px-6 py-28 md:px-10 md:py-40"
    >
      {/* Section Header */}
      <div className="mb-16 md:mb-24">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-red" />

          <span className="text-[10px] font-semibold tracking-[0.3em] text-muted">
            GET IN TOUCH
          </span>
        </div>

        <h2
          className="
            max-w-5xl
            font-inter
            text-6xl
            font-black
            leading-[0.82]
            tracking-[-0.065em]
            text-paper
            sm:text-7xl
            md:text-8xl
            lg:text-[9rem]
          "
        >
          Let&rsquo;s make
          <br />
          something
          <br />
          <span className="text-red">worth telling.</span>
        </h2>
      </div>

      {/* Main Contact Area */}
      <div className="grid gap-14 border-t border-paper/10 pt-10 md:grid-cols-[1fr_auto] md:items-end md:gap-20">
        {/* Copy */}
        <div className="max-w-2xl">
          <p
            className="
              font-poppins
              text-xl
              font-semibold
              leading-[1.15]
              tracking-[-0.02em]
              text-paper
              md:text-2xl
            "
          >
            HAVE A STORY WORTH TELLING?
          </p>

          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-[1.8]
              text-muted
              md:text-base
            "
          >
            I&rsquo;m open to documentary and film commissions, creative
            collaborations, speaking engagements and interesting ideas.
          </p>
        </div>

        {/* CTA */}
        <a
          href="mailto:hello@ifiokettang.com"
          className="
            group
            inline-flex
            w-fit
            items-center
            gap-5
            border
            border-red
            bg-red
            px-7
            py-4
            font-poppins
            text-[10px]
            font-semibold
            tracking-[0.22em]
            text-paper
            transition-all
            duration-300
            hover:gap-7
            hover:bg-transparent
            hover:text-red
          "
        >
          <span>GET IN TOUCH</span>

          <span
            aria-hidden
            className="
              text-base
              leading-none
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </a>
      </div>

      {/* Email / Contact Details */}
      <div className="mt-20 border-t border-paper/10 pt-6 md:mt-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Email */}
          <div>
            <p className="mb-3 text-[9px] font-semibold tracking-[0.28em] text-paper/30">
              EMAIL
            </p>

            <a
              href="mailto:hello@ifiokettang.com"
              className="
                font-inter
                text-xl
                font-medium
                tracking-[-0.02em]
                text-paper
                transition-colors
                duration-300
                hover:text-red
                md:text-2xl
              "
            >
              hello@ifiokettang.com
            </a>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#38ff7e]" />

            <span className="text-[9px] font-medium tracking-[0.25em] text-paper/40">
              AVAILABLE FOR SELECTED PROJECTS
            </span>
          </div>
        </div>
      </div>

      {/* Footer Statement */}
      <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-6 md:mt-20 md:flex-row md:items-center md:justify-between">
        <p className="text-[9px] tracking-[0.25em] text-paper/20">
          FILMMAKER · STORYTELLER · JOURNALIST
        </p>

        <p className="text-[9px] tracking-[0.2em] text-paper/20">
          NIGERIA · AFRICA · BEYOND
        </p>
      </div>
    </section>
  );
}
