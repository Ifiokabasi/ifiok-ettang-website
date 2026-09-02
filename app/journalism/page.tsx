"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Story = {
  title: string;
  accent?: string;
  accentColor?: string;
  blurb: string;
  image: string;
  font: string;
  titleClass?: string;
  category: string;
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
    youtubeId: "3NgZhXpAbr4",
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

const categories = [
  "ALL",
  "INVESTIGATION",
  "HUMAN STORIES",
  "AFRICA",
  "CULTURE",
  "SPORT & LIFE",
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
      layout
      onClick={() => onPlay(story)}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white/5">
        <motion.img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        {/* Dark gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Number */}
        <div className="absolute left-5 top-5 z-10">
          <span className="text-[10px] font-medium tracking-[0.25em] text-white/80">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Play */}
        <div className="absolute bottom-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-white/60 group-hover:bg-black/60">
          <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-white" />
        </div>
      </div>

      {/* Content */}
      <div className="pt-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-5 bg-red" />

          <span className="text-[9px] font-semibold tracking-[0.28em] text-paper/45">
            {story.category}
          </span>
        </div>

        <h2
          className={`
            ${story.font}
            ${story.titleClass ?? "text-4xl"}
            leading-[0.9]
            tracking-[-0.025em]
            text-paper
            transition-opacity
            duration-500
            group-hover:text-paper/80
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
        </h2>

        <p className="mt-4 max-w-sm text-[13px] leading-[1.6] tracking-[0.01em] text-paper/55 md:text-sm">
          {story.blurb}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-paper/10 pt-4">
          <span className="text-[9px] font-medium tracking-[0.25em] text-paper/35">
            JOURNALISM
          </span>

          <span className="text-[10px] tracking-[0.15em] text-paper/35 transition-all duration-300 group-hover:translate-x-1 group-hover:text-paper/70">
            WATCH →
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function JournalismPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const filteredStories = useMemo(() => {
    if (activeCategory === "ALL") return stories;

    return stories.filter(
      (story) => story.category === activeCategory
    );
  }, [activeCategory]);

  const closePlayer = () => {
    setSelectedStory(null);
  };

  return (
    <main className="min-h-screen bg-[#111] text-paper">
        <Navbar/>


      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-paper/10">
        <div className="mx-auto max-w-content px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-44">

          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-red" />

            <span className="text-[10px] font-semibold tracking-[0.3em] text-paper/45">
              JOURNALISM
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">

            <div>
              <h1 className="font-poppins text-6xl font-medium leading-[0.88] tracking-[-0.055em] text-paper md:text-8xl lg:text-[9rem]">
                STORIES
                <br />

                <span className="font-italiana text-7xl md:text-9xl">
                  that matter.
                </span>
              </h1>
            </div>

            <div className="max-w-md lg:pb-3">
              <p className="text-sm leading-[1.8] text-paper/50 md:text-base">
                Digital journalism from across Africa — investigations,
                human stories, culture, sport and stories that give a voice
                to people and issues that deserve to be seen.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="text-[10px] tracking-[0.25em] text-paper/30">
                  {stories.length} REPORTS
                </span>

                <span className="h-px w-10 bg-paper/15" />

                <span className="text-[10px] tracking-[0.25em] text-paper/30">
                  DIGITAL JOURNALISM
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CATEGORY NAVIGATION
      ===================================================== */}
      <section className="sticky top-0 z-40 border-b border-paper/10 bg-[#111]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-content overflow-x-auto px-6 md:px-10">
          <div className="flex min-w-max items-center gap-7 py-5 md:gap-10">

            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    relative whitespace-nowrap text-[9px]
                    font-semibold tracking-[0.25em]
                    transition-colors duration-300
                    ${
                      active
                        ? "text-paper"
                        : "text-paper/30 hover:text-paper/70"
                    }
                  `}
                >
                  {category}

                  {active && (
                    <motion.span
                      layoutId="category-line"
                      className="absolute -bottom-[21px] left-0 h-px w-full bg-red"
                    />
                  )}
                </button>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          REPORTS
      ===================================================== */}
      <section className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">

        <div className="mb-14 flex items-end justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-red" />

              <span className="text-[9px] font-semibold tracking-[0.3em] text-paper/35">
                {activeCategory === "ALL"
                  ? "ALL REPORTS"
                  : activeCategory}
              </span>
            </div>

            <h2 className="font-poppins text-3xl font-medium tracking-[-0.04em] md:text-5xl">
              Digital journalism
            </h2>
          </div>

          <span className="hidden text-[10px] tracking-[0.2em] text-paper/25 md:block">
            {filteredStories.length} STORIES
          </span>
        </div>


        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-24"
        >
          <AnimatePresence mode="popLayout">
            {filteredStories.map((story, index) => (
              <StoryCard
                key={story.title}
                story={story}
                index={index}
                onPlay={setSelectedStory}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </section>


      {/* =====================================================
          FOOTER CTA
      ===================================================== */}
      <section className="border-t border-paper/10">
        <div className="mx-auto max-w-content px-6 py-24 md:px-10 md:py-32">

          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-red" />

                <span className="text-[10px] font-semibold tracking-[0.3em] text-paper/35">
                  THE WORK
                </span>
              </div>

              <h2 className="max-w-3xl font-poppins text-4xl font-medium leading-[0.95] tracking-[-0.045em] md:text-6xl">
                Journalism that goes
                <br />
                <span className="font-italiana text-5xl md:text-7xl">
                  beyond the headline.
                </span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-[1.7] text-paper/40">
              Reporting people, places and experiences across Africa
              through powerful visual storytelling.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePlayer}
          >

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

              {/* Close */}
              <button
                type="button"
                onClick={closePlayer}
                aria-label="Close video"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-black/90"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                  <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
                </span>
              </button>


              {/* YouTube */}
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${selectedStory.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedStory.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>


              {/* Player information */}
              <div className="flex items-center justify-between gap-6 border-t border-white/10 bg-[#111] px-5 py-5 md:px-7">

                <div>
                  <div className="mb-1 flex items-center gap-3">
                    <span className="h-px w-5 bg-red" />

                    <span className="text-[9px] font-semibold tracking-[0.28em] text-white/40">
                      {selectedStory.category}
                    </span>
                  </div>

                  <h3
                    className={`${selectedStory.font} ${
                      selectedStory.titleClass ?? "text-4xl"
                    } text-white`}
                  >
                    {selectedStory.title}
                  </h3>
                </div>

                <span className="hidden text-[9px] font-medium tracking-[0.25em] text-white/30 md:block">
                  IFIOK ETTANG
                </span>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer/>

    </main>
  );
}