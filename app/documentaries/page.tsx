"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

/* =========================================================
   PRODUCTION PHOTOS
   Replace these paths with your actual production images.
   ========================================================= */

const productionPhotos = [
  {
    src: "/images/projects/skin-she-was-given/production-01.jpg",
    alt: "Production still from The Skin She Was Given",
    size: "large",
  },
  {
    src: "/images/projects/skin-she-was-given/production-02.jpg",
    alt: "Behind the scenes during production",
    size: "small",
  },
  {
    src: "/images/projects/skin-she-was-given/production-03.jpg",
    alt: "Production behind the scenes",
    size: "small",
  },
  {
    src: "/images/projects/skin-she-was-given/production-04.jpg",
    alt: "Filming The Skin She Was Given",
    size: "wide",
  },
  {
    src: "/images/projects/skin-she-was-given/production-05.jpg",
    alt: "Documentary production still",
    size: "small",
  },
  {
    src: "/images/projects/skin-she-was-given/production-06.jpg",
    alt: "Behind the scenes production photograph",
    size: "small",
  },
];

/* =========================================================
   PRODUCTION STAGES
   ========================================================= */

const stages = [
  {
    number: "01",
    name: "DEVELOPMENT",
    status: "COMPLETED",
  },
  {
    number: "02",
    name: "RESEARCH",
    status: "COMPLETED",
  },
  {
    number: "03",
    name: "PRE-PRODUCTION",
    status: "COMPLETED",
  },
  {
    number: "04",
    name: "PRODUCTION",
    status: "CURRENT",
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
      ease: [0.16, 1, 0.3, 1],
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* =========================================================
   PAGE
   ========================================================= */

export default function SkinSheWasGivenPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111] text-paper">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[92vh] overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0">
          <motion.img
            src="/images/now/skin-she-was-given.jpg"
            alt="The Skin She Was Given"
            className="h-full w-full object-cover"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1],
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
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-red" />

            <span className="text-[10px] font-semibold tracking-[0.3em] text-white/60">
              DOCUMENTARY · NIGERIA
            </span>
          </motion.div>


          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-6xl font-poppins text-[3.8rem] font-medium leading-[0.84] tracking-[-0.065em] text-white sm:text-7xl md:text-8xl lg:text-[9rem]"
          >
            THE SKIN
            <br />
            <span className="font-italiana text-[4.8rem] sm:text-8xl md:text-9xl lg:text-[10rem]">
              SHE WAS GIVEN
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

            <p className="max-w-xl text-sm leading-[1.7] text-white/65 md:text-base">
              A short documentary exploring identity, beauty and belonging
              in Northern Nigeria.
            </p>

            <div className="flex items-center gap-8">

              <div>
                <p className="mb-1 text-[8px] tracking-[0.25em] text-white/35">
                  STATUS
                </p>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#38ff7e]" />

                  <span className="text-[9px] font-semibold tracking-[0.2em] text-white/70">
                    IN PRODUCTION
                  </span>
                </div>
              </div>

              <div>
                <p className="mb-1 text-[8px] tracking-[0.25em] text-white/35">
                  RELEASE
                </p>

                <p className="text-[9px] font-semibold tracking-[0.2em] text-white/70">
                  NOVEMBER 2026
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
            viewport={{ once: true, amount: 0.3 }}
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
            viewport={{ once: true, amount: 0.3 }}
          >

            <h2 className="max-w-4xl font-poppins text-3xl font-medium leading-[1] tracking-[-0.04em] text-paper md:text-5xl">
              A story about
              <br />
              <span className="font-italiana text-5xl md:text-7xl">
                identity, beauty and belonging.
              </span>
            </h2>

            <div className="mt-9 max-w-2xl space-y-5 text-sm leading-[1.8] text-paper/45 md:text-base">

              <p>
                The Skin She Was Given is a short documentary exploring
                identity, beauty and belonging in Northern Nigeria.
              </p>

              <p>
                Through intimate encounters and visual storytelling, the
                film examines the relationship between how we see ourselves,
                how others see us, and the skin we are born into.
              </p>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          PRODUCTION PROGRESS
      ===================================================== */}

      <section className="border-y border-paper/10">

        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">

          {/* Header */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-red" />

                <span className="text-[10px] font-semibold tracking-[0.3em] text-paper/35">
                  PRODUCTION
                </span>
              </div>

              <h2 className="font-poppins text-4xl font-medium tracking-[-0.045em] md:text-6xl">
                The journey so far.
              </h2>
            </div>


            {/* Percentage */}
            <div className="flex items-end gap-3">
              <span className="font-poppins text-5xl font-medium leading-none tracking-[-0.05em] md:text-7xl">
                62
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
                whileInView={{ width: "62%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
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
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                              ? "bg-[#38ff7e] ring-4 ring-[#38ff7e]/10"
                              : completed
                                ? "bg-red"
                                : "bg-paper/15"
                          }
                        `}
                      />

                      {current && (
                        <span className="text-[8px] font-semibold tracking-[0.2em] text-[#38ff7e]">
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

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-[#38ff7e]" />

              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#38ff7e]">
                CURRENT STAGE
              </span>
            </div>

            <h2 className="font-poppins text-5xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl">
              In
              <br />
              <span className="font-italiana text-6xl md:text-8xl">
                production.
              </span>
            </h2>

          </motion.div>


          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-xl"
          >

            <p className="text-base leading-[1.8] text-paper/55 md:text-lg">
              The cameras are rolling. The story is moving from research
              and preparation into the physical process of making the film.
            </p>

            <p className="mt-6 text-sm leading-[1.8] text-paper/35 md:text-base">
              This section will evolve as production continues — capturing
              moments from the people, places and process behind the film.
            </p>

            <div className="mt-10 border-l border-paper/15 pl-5">

              <p className="text-[9px] font-semibold tracking-[0.25em] text-paper/30">
                TARGET RELEASE
              </p>

              <p className="mt-2 font-poppins text-sm font-medium tracking-[0.05em] text-paper">
                NOVEMBER 2026
              </p>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTION GALLERY
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
                Production
                <br />
                <span className="font-italiana text-5xl md:text-8xl">
                  in frames.
                </span>
              </h2>

            </div>

            <p className="max-w-xs text-sm leading-[1.7] text-paper/35">
              A glimpse into the making of The Skin She Was Given.
            </p>

          </div>


          {/* Gallery */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">

            {productionPhotos.map((photo, index) => {

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
          PRODUCTION JOURNAL
      ===================================================== */}

      <section className="border-t border-paper/10">

        <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-36">

          <div className="grid gap-14 md:grid-cols-[0.35fr_0.65fr] md:gap-24">

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-red" />

                <span className="text-[10px] font-semibold tracking-[0.3em] text-paper/35">
                  PRODUCTION JOURNAL
                </span>
              </div>

            </motion.div>


            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-2xl"
            >

              <h2 className="font-poppins text-3xl font-medium leading-[1] tracking-[-0.04em] md:text-5xl">
                Making the film
                <br />
                <span className="font-italiana text-5xl md:text-7xl">
                  one frame at a time.
                </span>
              </h2>

              <p className="mt-8 text-sm leading-[1.8] text-paper/45 md:text-base">
                The production journal will document the journey behind
                the documentary — from locations and interviews to the
                people and moments that shape the final film.
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
          FINAL CTA
      ===================================================== */}

      <section className="border-t border-paper/10">

        <div className="mx-auto max-w-content px-6 py-28 md:px-10 md:py-40">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center"
          >

            <div className="mb-7 flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-red" />

              <span className="text-[10px] font-semibold tracking-[0.3em] text-paper/35">
                THE NEXT CHAPTER
              </span>

              <span className="h-px w-7 bg-red" />
            </div>


            <h2 className="font-poppins text-4xl font-medium leading-[0.9] tracking-[-0.05em] md:text-7xl">

              The story
              <br />

              <span className="font-italiana text-6xl md:text-9xl">
                continues.
              </span>

            </h2>


            <p className="mx-auto mt-8 max-w-md text-sm leading-[1.7] text-paper/35">
              Follow the journey as The Skin She Was Given moves toward
              completion.
            </p>


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