"use client";

import { motion } from "framer-motion";

type Story = {
  title: string;
  accent?: string;
  accentColor?: string;
  blurb: string;
  image: string;
  font: string;
  titleClass?: string;
  category?: string;
};

const stories: Story[] = [
  {
    title: "Escaping Libya",
    category: "HUMAN STORIES",
    blurb:
      "A trafficking survivor turned her 30-month ordeal in Libya into a rescue mission.",
    image: "/images/stories/escaping-libya.jpg",
    font: "font-jaro",
    titleClass: "text-5xl md:text-6xl",
  },
  {
    title: "A Practice on Trial",
    category: "INVESTIGATION",
    blurb:
      "Inside the political and legal battle over the future of FGM legislation in The Gambia.",
    image: "/images/stories/practice-on-trial.jpg",
    font: "font-joan",
    titleClass: "text-5xl md:text-6xl",
  },
  {
    title: "Silent Hunger",
    category: "AFRICA",
    blurb:
      "Inside northern Nigeria's severe child malnutrition crisis driven by soaring food prices and conflict.",
    image: "/images/stories/silent-hunger.jpeg",
    font: "font-poppins font-bold",
    titleClass: "text-5xl md:text-6xl",
  },
  {
    title: "Baby Bleaching",
    accent: "Bleaching",
    accentColor: "text-red",
    category: "INVESTIGATION",
    blurb:
      "Nigeria recording a high skin-lightening usage rate on children.",
    image: "/images/stories/baby-bleaching.jpg",
    font: "font-jaini",
    titleClass: "text-5xl md:text-6xl",
  },
  {
    title: "Vigilante Women of Jos",
    category: "HUMAN STORIES",
    blurb:
      "In Jos, Plateau State, Nigeria, Christian and Muslim women have united to form an inspiring all-female vigilante group.",
    image: "/images/stories/vigilante-women.jpg",
    font: "font-jacques",
    titleClass: "text-4xl md:text-5xl",
  },
  {
    title: "Taba",
    category: "INVESTIGATION",
    blurb:
      "An investigation highlighting the hidden addiction of women in The Gambia.",
    image: "/images/stories/taba.jpg",
    font: "font-jaini",
    titleClass: "text-6xl md:text-7xl",
  },
  {
    title: "The Watch Maker",
    category: "CULTURE",
    blurb:
      "Once a bustling trade where he repaired over 100 watches a day, the craft has slowed significantly as mobile phones replace wristwatches.",
    image: "/images/stories/watch-maker.jpg",
    font: "font-italiana",
    titleClass: "text-5xl md:text-6xl",
  },
  {
    title: "Five Crowns, One Mother",
    category: "SPORT & LIFE",
    blurb:
      "How a Nigerian basketball legend conquered the continent as a surgeon and a new mother.",
    image: "/images/stories/five-crowns.jpg",
    font: "font-italiana",
    titleClass: "text-5xl md:text-6xl",
  },
  {
    title: "‘It’s too bitter for me and my family’",
    accent: "bitter",
    accentColor: "text-red",
    category: "HUMAN STORIES",
    blurb:
      "Chike Michael Onovo lost his 15-year-old son, Chidera, in Jos, Nigeria.",
    image: "/images/stories/too-bitter.jpg",
    font: "font-medula",
    titleClass: "text-4xl md:text-5xl",
  },
];

function StoryCard({
  story,
  index,
}: {
  story: Story;
  index: number;
}) {
  const titleParts = story.accent
    ? story.title.split(story.accent)
    : [story.title];

  return (
    <motion.article
      className="group flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
        {/* Image */}
        <motion.img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover"
          variants={{
            hidden: {
              scale: 1.15,
            },
            visible: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1.4,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* Reveal curtain */}
        <motion.div
          className="absolute inset-0 z-10 bg-[#111]"
          variants={{
            hidden: {
              scaleX: 1,
              transformOrigin: "right",
            },
            visible: {
              scaleX: 0,
              transformOrigin: "right",
            },
          }}
          transition={{
            duration: 1.1,
            delay: index * 0.08,
            ease: [0.76, 0, 0.24, 1],
          }}
        />

        {/* Image overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />

        {/* Number */}
        <motion.div
          className="absolute left-5 top-5 z-30"
          variants={{
            hidden: {
              opacity: 0,
              y: 10,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.08 + 0.8,
            ease: "easeOut",
          }}
        >
          <span className="text-[10px] font-medium tracking-[0.25em] text-white/80">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="pt-5"
        variants={{
          hidden: {
            opacity: 0,
            y: 25,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.7,
          delay: index * 0.08 + 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Category */}
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-5 bg-red" />

          <span className="text-[9px] font-semibold tracking-[0.28em] text-paper/45">
            {story.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`
            ${story.font}
            ${story.titleClass ?? "text-4xl"}
            leading-[0.9]
            tracking-[-0.025em]
            text-paper
            transition-opacity
            duration-500
            group-hover:text-paper/90
          `}
        >
          {story.accent ? (
            <>
              {titleParts[0]}
              <span className={story.accentColor ?? "text-red"}>
                {story.accent}
              </span>
              {titleParts[1]}
            </>
          ) : (
            story.title
          )}
        </h3>

        {/* Description */}
        <p className="mt-4 max-w-sm text-[13px] leading-[1.6] tracking-[0.01em] text-paper/55 md:text-sm">
          {story.blurb}
        </p>

        {/* Bottom detail */}
        <div className="mt-6 flex items-center justify-between border-t border-paper/10 pt-4">
          <span className="text-[9px] font-medium tracking-[0.25em] text-paper/35">
            STORY
          </span>

          <span className="text-[10px] tracking-[0.15em] text-paper/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-paper/70">
            VIEW →
          </span>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function StoriesSection() {
  return (
    <section className="mx-auto max-w-content px-6 py-28 md:px-10 md:py-36">
      {/* Section Header */}
      <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-red" />

            <span className="text-[10px] font-semibold tracking-[0.3em] text-paper/45">
              SELECTED WORK
            </span>
          </div>

          <h2 className="max-w-2xl font-poppins text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-paper md:text-6xl">
            Stories that
            <br />
            <span className="font-italiana text-5xl md:text-7xl">
              stay with you.
            </span>
          </h2>
        </div>

        <p className="max-w-xs text-sm leading-relaxed text-paper/45 md:pb-1">
          Documentary stories from across Africa — people, places and
          experiences that deserve to be seen.
        </p>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-24">
        {stories.map((story, index) => (
          <StoryCard
            key={story.title}
            story={story}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
