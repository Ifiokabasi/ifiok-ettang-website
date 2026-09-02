import Link from "next/link";

const links = [
  { label: "Films", href: "/films" },
  { label: "Documentaries", href: "/documentaries" },
  { label: "Journalism", href: "/journalism" },
  { label: "Stories", href: "/fieldnotes" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div
          className="
            flex
            h-[88px]
            items-center
            justify-between
            border-b
            border-paper/10
            md:h-[104px]
          "
        >
          {/* =========================
              BRAND
          ========================== */}
          <Link href="/" className="group flex flex-col">
            <span
              className="
                font-rocksalt
                text-xl
                leading-none
                text-paper
                transition-opacity
                duration-300
                group-hover:opacity-70
                md:text-2xl
              "
            >
              Ifiok Ettang
            </span>

            <span className="mt-2 hidden text-[8px] font-medium tracking-[0.22em] text-paper/40 md:block">
              FILMMAKER
              <span className="mx-1 text-red">.</span>
              JOURNALIST
              <span className="mx-1 text-red">.</span>
              STORYTELLER
              <span className="text-red">.</span>
            </span>
          </Link>

          {/* =========================
              DESKTOP NAV
          ========================== */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex xl:gap-10"
          >
            {links.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                  group
                  relative
                  py-3
                  text-[10px]
                  font-medium
                  tracking-[0.2em]
                  text-paper/60
                  transition-colors
                  duration-300
                  hover:text-paper
                "
              >
                {link.label.toUpperCase()}

                {/* Animated underline */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-red
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

                {/* First item marker */}
                {index === 0 && (
                  <span className="absolute -left-3 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-red opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                )}
              </Link>
            ))}
          </nav>

          {/* =========================
              MOBILE MENU
          ========================== */}
          <button
            type="button"
            aria-label="Open menu"
            className="
              group
              flex
              h-10
              w-10
              items-center
              justify-center
              lg:hidden
            "
          >
            <span className="flex w-6 flex-col gap-[5px]">
              <span
                className="
                  h-px
                  w-full
                  bg-paper
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
              <span
                className="
                  h-px
                  w-4
                  self-end
                  bg-paper/70
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
              <span
                className="
                  h-px
                  w-full
                  bg-paper
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}