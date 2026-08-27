const columns = [
  {
    heading: "WORK",
    links: [
      { label: "Films", href: "#work" },
      { label: "Journalism", href: "#work" },
    ],
  },
  {
    heading: "ABOUT",
    links: [
      { label: "Currently", href: "#now" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "FIELD NOTES",
    links: [{ label: "Journal", href: "#field-notes" }],
  },
  {
    heading: "CORNROW",
    links: [
      { label: "Academy", href: "#" },
      { label: "Digital", href: "#" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Vimeo", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-footer">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        {/* =========================
            TOP
        ========================== */}
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          {/* BRAND */}
          <div className="flex flex-col">
            <div>
              <p className="font-rocksalt text-2xl text-paper md:text-3xl">
                Ifiok Ettang
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="font-poppins text-xs font-bold tracking-[0.18em] text-paper">
                  FILMMAKER
                </span>

                <span className="text-red">.</span>

                <span className="font-poppins text-xs font-bold tracking-[0.18em] text-paper">
                  STORYTELLER
                </span>

                <span className="text-red">.</span>
              </div>
            </div>

            {/* Short statement */}
            <p className="mt-12 max-w-md font-inter text-xl leading-[1.2] tracking-[-0.02em] text-paper/60 md:text-2xl">
              Telling human stories through film, journalism and visual
              storytelling.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 lg:grid-cols-2">
            {columns.map((column) => (
              <div key={column.heading} className="flex flex-col">
                <p className="mb-5 text-[9px] font-semibold tracking-[0.3em] text-paper/30">
                  {column.heading}
                </p>

                <div className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="
                        group/link
                        flex
                        w-fit
                        items-center
                        gap-2
                        text-sm
                        text-paper/70
                        transition-colors
                        duration-300
                        hover:text-paper
                      "
                    >
                      <span
                        className="
                          h-px
                          w-0
                          bg-red
                          transition-all
                          duration-300
                          group-hover/link:w-3
                        "
                      />

                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            SOCIALS
        ========================== */}
        <div className="mt-20 border-t border-paper/10 pt-8 md:mt-28">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[9px] font-semibold tracking-[0.3em] text-paper/30">
                ELSEWHERE
              </p>

              <p className="font-inter text-xl tracking-[-0.02em] text-paper md:text-2xl">
                Follow the work.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-4 sm:grid-cols-4 sm:gap-x-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="
                    group/social
                    flex
                    items-center
                    gap-3
                    text-[10px]
                    font-medium
                    tracking-[0.15em]
                    text-paper/50
                    transition-colors
                    duration-300
                    hover:text-paper
                  "
                >
                  <span
                    className="
                      flex
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-paper/25
                      transition-colors
                      duration-300
                      group-hover/social:bg-red
                    "
                  />

                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =========================
            LARGE BRAND MOMENT
        ========================== */}
        <div className="relative mt-20 overflow-hidden border-t border-paper/10 pt-10 md:mt-28 md:pt-14">
          <p
            className="
              select-none
              font-inter
              text-[18vw]
              font-black
              leading-[0.72]
              tracking-[-0.09em]
              text-paper/[0.035]
              md:text-[15vw]
            "
          >
            IFIOK
          </p>
        </div>

        {/* =========================
            BOTTOM
        ========================== */}
        <div className="mt-12 flex flex-col gap-6 border-t border-paper/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9d9d9] font-poppins text-xs font-semibold text-[#0b0d10]">
              I
            </span>

            <p className="text-[9px] font-medium tracking-[0.25em] text-paper/35">
              © {year} IFIOK ETTANG
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[9px] tracking-[0.2em] text-paper/25">
              NIGERIA · AFRICA · BEYOND
            </span>

            <span className="h-px w-8 bg-red" />
          </div>
        </div>
      </div>
    </footer>
  );
}