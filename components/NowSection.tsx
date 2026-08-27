
type Status = "production" | "development" | "building" | "exploring";

type Project = {
  eyebrow: string;
  title: string;
  meta: string;
  description: string[];
  status: {
    label: string;
    color: string;
    target: string;
  };
  ctaLabel: string;
  ctaColor: string;
  ctaTextColor?: string;
  image: string;
  reverse?: boolean;
};

const projects: Project[] = [
  {
    eyebrow: "MAKING",
    title: "THE SKIN SHE WAS GIVEN",
    meta: "DOCUMENTARY · NIGERIA",
    description: [
      "A short documentary exploring identity, beauty",
      "and belonging in Northern Nigeria.",
    ],
    status: {
      label: "IN PRODUCTION",
      color: "bg-[#38ff7e]",
      target: "TARGET — NOVEMBER 2026",
    },
    ctaLabel: "VIEW PROJECT",
    ctaColor: "bg-red",
    image: "/images/now/skin-she-was-given.jpg",
  },

  {
    eyebrow: "DEVELOPING",
    title: "UNTITLED NARRATIVE SHORT",
    meta: "NARRATIVE FILM · 2027",
    description: [
      "A character-driven story exploring",
      "family, faith and ambition.",
    ],
    status: {
      label: "IN DEVELOPMENT",
      color: "bg-yellow",
      target: "TARGET — Q1 2027",
    },
    ctaLabel: "VIEW PROJECT",
    ctaColor: "bg-red",
    image: "/images/now/untitled-narrative.jpg",
    reverse: true,
  },

  {
    eyebrow: "BUILDING",
    title: "CORNROW",
    meta: "FILM · STORIES · ACADEMY · DIGITAL",
    description: [
      "A film and media company creating stories,",
      "developing storytellers and exploring new",
      "ways of producing and experiencing African media.",
    ],
    status: {
      label: "",
      color: "",
      target: "",
    },
    ctaLabel: "DISCOVER CORNROW",
    ctaColor: "bg-amber",
    image: "/images/now/cornrow.jpg",
  },

  {
    eyebrow: "EXPLORING",
    title: "DIGITAL STORYTELLING",
    meta: "STORY × TECHNOLOGY",
    description: [
      "Exploring how technology can change",
      "the way stories are created and experienced.",
    ],
    status: {
      label: "",
      color: "",
      target: "",
    },
    ctaLabel: "VIEW THE LAB",
    ctaColor: "bg-[#d9d9d9]",
    ctaTextColor: "text-[#1a1a1a]",
    image: "/images/now/digital-storytelling.jpg",
    reverse: true,
  },
];

function Row({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        gap-12
        md:flex-row
        md:justify-between
        md:gap-20
        lg:gap-28
        ${project.reverse ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* IMAGE */}
      <div className="group relative w-full md:max-w-[50%]">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-[1200ms]
              ease-out
              group-hover:scale-[1.04]
            "
          />

          {/* Subtle cinematic overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-black/10
              transition-opacity
              duration-700
              group-hover:opacity-0
            "
          />
        </div>

        {/* Image Number */}
        <span
          className="
            absolute
            bottom-4
            right-4
            font-poppins
            text-[9px]
            tracking-[0.2em]
            text-white/60
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* TEXT */}
      <div className="flex w-full max-w-xl flex-col items-start">
        {/* EYEBROW + NUMBER */}
        <div className="mb-8 flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-red" />

            <p className="text-[10px] font-semibold tracking-[0.28em] text-muted">
              {project.eyebrow}
            </p>
          </div>

          <span className="font-poppins text-[10px] tracking-[0.25em] text-paper/25">
            PROJECT {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* TITLE */}
        <h3
          className="
            max-w-xl
            font-inter
            text-3xl
            font-semibold
            leading-[0.95]
            tracking-[-0.035em]
            text-paper
            md:text-5xl
          "
        >
          {project.title}
        </h3>

        {/* META */}
        <p
          className="
            mt-4
            text-[10px]
            font-medium
            tracking-[0.2em]
            text-paper/35
            md:text-xs
          "
        >
          {project.meta}
        </p>

        {/* DESCRIPTION */}
        <div
          className="
            mt-7
            max-w-md
            text-sm
            leading-[1.7]
            text-muted
            md:text-base
          "
        >
          {project.description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        {/* STATUS */}
        {project.status.label && (
          <div
            className="
              mt-8
              flex
              flex-col
              gap-1
              border-l
              border-paper/15
              pl-4
            "
          >
            <p
              className="
                flex
                items-center
                gap-2
                text-[10px]
                font-semibold
                tracking-[0.18em]
                text-paper/60
              "
            >
              <span
                className={`
                  h-1.5
                  w-1.5
                  rounded-full
                  ${project.status.color}
                `}
              />

              {project.status.label}
            </p>

            <p className="text-[9px] tracking-[0.2em] text-paper/30">
              {project.status.target}
            </p>
          </div>
        )}

        {/* CTA */}
        <button
          className={`
            group/button
            mt-9
            inline-flex
            items-center
            gap-4
            border
            border-paper/15
            px-6
            py-3.5
            font-poppins
            text-[10px]
            font-semibold
            tracking-[0.2em]
            transition-all
            duration-300
            hover:border-paper/40
            hover:gap-6
            ${project.ctaColor}
            ${project.ctaTextColor ?? "text-paper"}
          `}
        >
          <span>{project.ctaLabel}</span>

          <span
            className="
              text-sm
              transition-transform
              duration-300
              group-hover/button:translate-x-1
            "
          >
            →
          </span>
        </button>
      </div>
    </div>
  );
}

export default function NowSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-28 md:px-10 md:py-40">
      {/* =========================
          SECTION HEADER
      ========================== */}
      <div className="relative mb-24 md:mb-32">
        <div className="flex items-end justify-between">
          {/* LEFT */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-red" />

              <span className="text-[10px] font-semibold tracking-[0.3em] text-muted">
                CURRENTLY
              </span>
            </div>

            <h2
              className="
                font-inter
                text-7xl
                font-black
                leading-[0.8]
                tracking-[-0.07em]
                text-paper
                sm:text-8xl
                md:text-[10rem]
              "
            >
              Now
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}
          <p
            className="
              hidden
              max-w-[220px]
              pb-2
              text-right
              text-xs
              leading-relaxed
              text-paper/35
              md:block
            "
          >
            A selection of stories,
            <br />
            films and ideas currently
            <br />
            occupying my world.
          </p>
        </div>

        {/* HEADER RULE */}
        <div className="mt-10 h-px w-full bg-paper/10" />
      </div>

      {/* =========================
          PROJECT LIST
      ========================== */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div key={project.title}>
            <Row project={project} index={index} />

            {/* Divider */}
            {index < projects.length - 1 && (
              <div className="my-20 h-px w-full bg-paper/10 md:my-28" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

