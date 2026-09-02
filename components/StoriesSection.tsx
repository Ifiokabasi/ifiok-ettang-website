"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Story = {
  title: string;
  accent?: string;
  accentColor?: string;
  blurb: string;
  image: string;
  font: string;
  titleClass?: string;
  category?: string;
  youtubeId: string;
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
    youtubeId: "BxUpi9kJZrk",
  },
  {
    title: "A Practice on Trial",
    category: "INVESTIGATION",
    blurb:
      "Inside the political and legal battle over the future of FGM legislation in The Gambia.",
    image: "/images/stories/practice-on-trial.jpg",
    font: "font-joan",
    titleClass: "text-5xl md:text-6xl",
    youtubeId: "n79DQpHG7eI",
  },
  {
    title: "Silent Hunger",
    category: "AFRICA",
    blurb:
      "Inside northern Nigeria's severe child malnutrition crisis driven by soaring food prices and conflict.",
    image: "/images/stories/silent-hunger.jpeg",
    font: "font-poppins font-bold",
    titleClass: "text-5xl md:text-6xl",
    youtubeId: "M-EoALzsYo0",
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
    youtubeId: "AhjC1w2ccc0",
  },
  {
    title: "Vigilante Women of Jos",
    category: "HUMAN STORIES",
    blurb:
      "In Jos, Plateau State, Nigeria, Christian and Muslim women have united to form an inspiring all-female vigilante group.",
    image: "/images/stories/vigilante-women.jpg",
    font: "font-jacques",
    titleClass: "text-4xl md:text-5xl",
    youtubeId: "8uHFUbQOtl4",
  },
  {
    title: "Taba",
    category: "INVESTIGATION",
    blurb:
      "An investigation highlighting the hidden addiction of women in The Gambia.",
    image: "/images/stories/taba.jpg",
    font: "font-jaini",
    titleClass: "text-6xl md:text-7xl",
    youtubeId: "vT0CaMgSlMQ",
  },
  {
    title: "The Watch Maker",
    category: "CULTURE",
    blurb:
      "Once a bustling trade where he repaired over 100 watches a day, the craft has slowed significantly as mobile phones replace wristwatches.",
    image: "/images/stories/watch-maker.jpg",
    font: "font-italiana",
    titleClass: "text-5xl md:text-6xl",
    youtubeId: "qpn5_S_U2zo",
  },
  {
    title: "Five Crowns, One Mother",
    category: "SPORT & LIFE",
    blurb:
      "How a Nigerian basketball legend conquered the continent as a surgeon and a new mother.",
    image: "/images/stories/five-crowns.jpg",
    font: "font-italiana",
    titleClass: "text-5xl md:text-6xl",
    youtubeId: "3NgZhXpAbr4/edit",
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
    youtubeId: "2Sik0ZHRnIM",
  },
];

function StoryCard({
  story,
  index,
  onPlay,
}: {
  story: Story;
  index: number;
  onPlay: (story: Story) => void;
}) {
  const titleParts = story.accent
    ? story.title.split(story.accent)
    : [story.title];

  return (
    <motion.article
      onClick={() => onPlay(story)}
      className="group flex cursor-pointer flex-col"
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
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
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
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />

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

        {/* Play button */}
        <motion.div
          className="absolute bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-white/60 group-hover:bg-black/50"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08 + 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-white" />
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
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const closePlayer = () => {
    setSelectedStory(null);
  };

  return (
    <>
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
              onPlay={setSelectedStory}
            />
          ))}
        </div>
      </section>

      {/* YouTube Player Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePlayer}
          >
            {/* Player Container */}
            <motion.div
              className="relative w-full max-w-6xl overflow-hidden bg-black"
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closePlayer}
                aria-label="Close video"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-black/90"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                  <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
                </span>
              </button>

              {/* YouTube Player */}
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${selectedStory.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedStory.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Player Information */}
              <div className="flex items-center justify-between gap-6 border-t border-white/10 bg-[#111] px-5 py-5 md:px-7">
                <div>
                  <div className="mb-1 flex items-center gap-3">
                    <span className="h-px w-5 bg-red" />

                    <span className="text-[9px] font-semibold tracking-[0.28em] text-white/40">
                      {selectedStory.category}
                    </span>
                  </div>

                  <h3
                    className={`${selectedStory.font} ${selectedStory.titleClass ?? "text-4xl"} text-white`}
                  >
                    {selectedStory.title}
                  </h3>
                </div>

                <span className="hidden text-[9px] font-medium tracking-[0.25em] text-white/30 md:block">
                  CORNROW STORIES
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}