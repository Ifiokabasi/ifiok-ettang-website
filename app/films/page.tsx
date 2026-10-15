
"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

/* =========================================================
   PROJECT
   ========================================================= */

const project = {
  eyebrow: "DEVELOPING",
  title: "THE GRINDING MACHINE",
  meta: "NARRATIVE FILM · 2027",

  description: [
    "A gifted 13-year-old girl in Northern Nigeria",
    "fights to pursue an education while feeding her family.",
  ],

  status: {
    label: "IN DEVELOPMENT",
    color: "bg-yellow",
    target: "TARGET — Q2 2027",
  },

  ctaLabel: "VIEW PROJECT",
  ctaColor: "bg-red",

  image: "/images/now/the-grinding-machine.jpg",

  href: "/projects/the-grinding-machine",
};

/* =========================================================
   DEVELOPMENT / PRODUCTION PHOTOS
   Replace these paths with your actual images.
   ========================================================= */

const projectPhotos = [
  {
    src: "/images/projects/the-grinding-machine/development-01.jpg",
    alt: "Visual research for The Grinding Machine",
    size: "large",
  },
  {
    src: "/images/projects/the-grinding-machine/development-02.jpg",
    alt: "Research into everyday life in rural Northern Nigeria",
    size: "small",
  },
  {
    src: "/images/projects/the-grinding-machine/development-03.jpg",
    alt: "Visual references for Zainab's world",
    size: "small",
  },
  {
    src: "/images/projects/the-grinding-machine/development-04.jpg",
    alt: "Developing the film's visual language",
    size: "wide",
  },
  {
    src: "/images/projects/the-grinding-machine/development-05.jpg",
    alt: "Story development and screenplay research",
    size: "small",
  },
  {
    src: "/images/projects/the-grinding-machine/development-06.jpg",
    alt: "Location and production research",
    size: "small",
  },
];

/* =========================================================
   PROJECT STAGES
   ========================================================= */

const stages = [
  {
    number: "01",
    name: "CONCEPT",
    status: "COMPLETED",
  },
  {
    number: "02",
    name: "DEVELOPMENT",
    status: "CURRENT",
  },
  {
    number: "03",
    name: "PRE-PRODUCTION",
    status: "UPCOMING",
  },
  {
    number: "04",
    name: "PRODUCTION",
    status: "UPCOMING",
  },
  {
    number: "05",
    name: "POST-PRODUCTION",
    status: "UPCOMING",
  },
  {
    number: "06",
    name: "RELEASE",
    status: "UPCOMING",
  },
];

/* =========================================================
   ANIMATION
   ========================================================= */

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

/* =========================================================
   PAGE
   ========================================================= */

export default function TheGrindingMachinePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111] text-paper">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[92vh] overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0">

          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />

          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/10 to-black/30" />

        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-content flex-col justify-end px-6 pb-12 md:px-10 md:pb-16">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-red" />

            <span className="text-[10px] font-semibold tracking-[0.3em] text-white/60">
              {project.eyebrow} · {project.meta}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeInOut",
            }}
            className="max-w-6xl font-poppins text-[3.5rem] font-medium leading-[0.84] tracking-[-0.065em] text-white sm:text-7xl md:text-8xl lg:text-[9rem]"
          >
            THE GRINDING
            <br />

            <span className="font-italiana text-[4.8rem] sm:text-8xl md:text-9xl lg:text-[10rem]">
              MACHINE.
            </span>
          </motion.h1>

          {/* Bottom metadata */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            className="mt-10 flex flex-col justify-between gap-8 border-t border-white/20 pt-5 md:flex-row md:items-end"
          >

            <div className="max-w-xl">
              <p className="text-sm leading-[1.7] text-white/65 md:text-base">
                {project.description[0]}{" "}
                {project.description[1]}
              </p>
            </div>

            <div className="flex items-center gap-8">

              {/* Status */}
              <div>
                <p className="mb-1 text-[8px] tracking-[0.25em] text-white/35">
                  STATUS
                </p>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow" />

                  <span className="text-[9px] font-semibold tracking-[0.2em] text-white/70">
                    {project.status.label}
                  </span>
                </div>
              </div>

              {/* Target */}
              <div>
                <p className="mb-1 text-[8px] tracking-[0.25em] text-white/35">
                  TARGET
                </p>

                <p className="text-[9px] font-semibold tracking-[0.2em] text-white/70">
                  Q2 2027
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          PROJECT INTRO
      ===================================================== */}

      <section className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-36">

        <div className="grid gap-16 md:grid-cols-[0.35fr_0.65fr] md:gap-20">

          {/* Label */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-red" />

              <span className="text-[10px] font-semibold tracking-[0.3em] text-paper/35">
                THE FILM
              </span>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <h2 className="max-w-4xl font-poppins text-3xl font-medium leading-[1] tracking-[-0.04em] text-paper md:text-5xl">
              A childhood caught
              <br />

              <span className="font-italiana text-5xl md:text-7xl">
                between duty and dreams.
              </span>
            </h2>

            <div className="mt-9 max-w-2xl space-y-5 text-sm leading-[1.8] text-paper/45 md:text-base">

              <p>
                In a rural Northern Nigerian village, Zainab, a
                gifted 13-year-old girl, begins each morning before
                dawn grinding grain for her family. By the time
                the school bell rings, she is already racing against
                a clock that was never designed for a child like her.
              </p>

              <p>
                Torn between the demands of survival and her
                determination to learn, Zainab must find a way to
                hold on to her education without abandoning the
                family that depends on her.
              </p>

              <p>
                The Grinding Machine is a character-driven narrative
                short about childhood, invisible labour and the
                quiet courage it takes to imagine a different future.
                Rooted in the textures and rhythms of rural Northern
                Nigeria, the film explores the cost of a dream when
                survival comes first.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          PROJECT PROGRESS
      ===================================================== */}

      <section className="border-y border-paper/10">

        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">

          {/* Header */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-red" />

                <span className="text-[10px] font-semibold tracking-[0.3em] text-paper/35">
                  DEVELOPMENT
                </span>
              </div>

              <h2 className="font-poppins text-4xl font-medium tracking-[-0.045em] md:text-6xl">
                From an idea to a film.
              </h2>
            </div>

            {/* Percentage */}
            <div className="flex items-end gap-3">
              <span className="font-poppins text-5xl font-medium leading-none tracking-[-0.05em] md:text-7xl">
                18
              </span>

              <span className="mb-1 text-2xl text-paper/30">
                %
              </span>
            </div>

          </div>

          {/* Progress bar */}
          <div className="mt-12">

            <div className="relative h-[2px] w-full bg-paper/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "18%" }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-0 h-[2px] bg-red"
              />
            </div>

            {/* Stage labels */}
            <div className="mt-7 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">

              {stages.map((stage, index) => {
                const current = stage.status === "CURRENT";
                const completed = stage.status === "COMPLETED";

                return (
                  <motion.div
                    key={stage.name}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.5,
                    }}
                    className="relative"
                  >
                    <div className="mb-3 flex items-center gap-2">

                      <span
                        className={`
                          h-2 w-2 rounded-full
                          ${
                            current
                              ? "bg-yellow ring-4 ring-yellow/10"
                              : completed
                                ? "bg-red"
                                : "bg-paper/15"
                          }
                        `}
                      />

                      {current && (
                        <span className="text-[8px] font-semibold tracking-[0.2em] text-yellow">
                          CURRENT
                        </span>
                      )}

                    </div>

                    <p
                      className={`
                        text-[9px] font-semibold tracking-[0.18em]
                        ${
                          current
                            ? "text-paper"
                            : completed
                              ? "text-paper/55"
                              : "text-paper/20"
                        }
                      `}
                    >
                      {stage.name}
                    </p>

                    <p className="mt-1 text-[8px] tracking-[0.15em] text-paper/20">
                      {stage.number}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CURRENT STAGE
      ===================================================== */}

      <section className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-36">

        <div className="grid gap-14 md:grid-cols-[0.4fr_0.6fr] md:gap-24">

          {/* Heading */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-yellow" />

              <span className="text-[10px] font-semibold tracking-[0.3em] text-yellow">
                CURRENT STAGE
              </span>
            </div>

            <h2 className="font-poppins text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl">
              Finding
              <br />

              <span className="font-italiana text-6xl md:text-8xl">
                Zainab's world.
              </span>
            </h2>
          </motion.div>

          {/* Copy */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="max-w-xl"
          >
            <p className="text-base leading-[1.8] text-paper/55 md:text-lg">
              The film is currently in development, with a focus on
              building a truthful, emotionally grounded story around
              Zainab's daily life, her family responsibilities and
              her determination to go to school.
            </p>

            <p className="mt-6 text-sm leading-[1.8] text-paper/35 md:text-base">
              The process involves refining the screenplay,
              researching the realities of rural life, developing
              the characters and identifying locations, performers
              and visual references. The goal is to tell a deeply
              local story with a universal emotional resonance,
              without losing the authenticity of the world it
              represents.
            </p>

            {/* Target */}
            <div className="mt-10 border-l border-paper/15 pl-5">
              <p className="text-[9px] font-semibold tracking-[0.25em] text-paper/30">
                TARGET
              </p>

              <p className="mt-2 font-poppins text-sm font-medium tracking-[0.05em] text-paper">
                Q2 2027
              </p>
            </div>
          </motion.div>

        </div>

      </section>

      {/* =====================================================
          DEVELOPMENT GALLERY
      ===================================================== */}

      <section className="border-t border-paper/10">

        <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-36">

          {/* Header */}
          <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-red" />

                <span className="text-[10px] font-semibold tracking-[0.3em] text-paper/35">
                  BEHIND THE FILM
                </span>
              </div>

              <h2 className="font-poppins text-4xl font-medium leading-[0.95] tracking-[-0.045em] md:text-6xl">
                The world
                <br />

                <span className="font-italiana text-5xl md:text-8xl">
                  before the story.
                </span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-[1.7] text-paper/35">
              Exploring the people, places, textures and everyday
              rhythms that will shape The Grinding Machine.
            </p>

          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">

            {projectPhotos.map((photo, index) => {
              let gridClass = "";

              if (photo.size === "large") {
                gridClass = "md:col-span-8";
              } else if (photo.size === "wide") {
                gridClass = "md:col-span-8";
              } else {
                gridClass = "md:col-span-4";
              }

              return (
                <motion.figure
                  key={photo.src}
                  variants={imageReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  className={`group relative overflow-hidden ${gridClass}`}
                >
                  <div
                    className={`
                      relative overflow-hidden bg-white/5
                      ${
                        photo.size === "large"
                          ? "aspect-[4/3]"
                          : photo.size === "wide"
                            ? "aspect-[16/8]"
                            : "aspect-[4/3]"
                      }
                    `}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-30" />
                  </div>

                  {/* Image number */}
                  <figcaption className="absolute bottom-4 left-4 text-[9px] font-medium tracking-[0.25em] text-white/60">
                    {String(index + 1).padStart(2, "0")}
                  </figcaption>
                </motion.figure>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          DEVELOPMENT JOURNAL
      ===================================================== */}

      <section className="border-t border-paper/10">

        <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-36">

          <div className="grid gap-14 md:grid-cols-[0.35fr_0.65fr] md:gap-24">

            {/* Label */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-red" />

                <span className="text-[10px] font-semibold tracking-[0.3em] text-paper/35">
                  DEVELOPMENT JOURNAL
                </span>
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="max-w-2xl"
            >
              <h2 className="font-poppins text-3xl font-medium leading-[1] tracking-[-0.04em] md:text-5xl">
                Every story begins
                <br />

                <span className="font-italiana text-5xl md:text-7xl">
                  with paying attention.
                </span>
              </h2>

              <p className="mt-8 text-sm leading-[1.8] text-paper/45 md:text-base">
                Follow the making of The Grinding Machine, from
                screenplay development and cultural research to
                location scouting, casting, cinematography and
                production. The journal will document the creative
                decisions behind the film and the process of
                bringing Zainab's story to the screen.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <span className="h-px w-8 bg-paper/15" />

                <span className="text-[9px] tracking-[0.25em] text-paper/25">
                  UPDATES COMING SOON
                </span>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECT CTA
      ===================================================== */}

      <section className="border-t border-paper/10">

        <div className="mx-auto max-w-content px-6 py-28 md:px-10 md:py-40">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="text-center"
          >
            {/* Eyebrow */}
            <div className="mb-7 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-red" />

              <span className="text-[10px] font-semibold tracking-[0.3em] text-paper/35">
                THE PROJECT
              </span>

              <span className="h-px w-7 bg-red" />
            </div>

            {/* Heading */}
            <h2 className="font-poppins text-4xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl">
              A dream
              <br />

              <span className="font-italiana text-6xl md:text-9xl">
                worth fighting for.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-md text-sm leading-[1.7] text-paper/35">
              A Northern Nigerian story about a girl, a grinding
              stone and the future she refuses to give up on.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/"
                className="group inline-flex items-center gap-4 border border-paper/15 bg-red px-7 py-4 font-poppins text-[10px] font-semibold tracking-[0.2em] text-paper transition-all duration-300 hover:gap-6 hover:border-paper/40"
              >
                <span>BACK TO HOME</span>

                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}
