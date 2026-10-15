
"use client";

import { useState } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-ink">
      {/* Background film */}
      <div className="absolute inset-0">
        <video
          src="/videos/hero_vol2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-70"
          poster="/images/hero-hz-thumb.jpg"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/10 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[620px] max-w-content flex-col justify-end px-6 pb-20 pt-32 md:min-h-[760px] md:px-10 md:pb-28">

        {/* Featured Film Label */}
        <p className="mb-4 font-poppins text-sm tracking-[0.3em] text-paper/70">
          FEATURED FILM
        </p>

        <h1 className="font-inter text-[15vw] font-black leading-[0.9] text-red sm:text-[9vw] md:text-[110px] lg:text-[128px]">
          NIGERIA'S
          <span className="mx-3 align-middle font-poppins text-[6vw] font-normal text-white sm:text-3xl md:text-4xl">
            PERIOD
          </span>
          <br />
          PORVERTY
        </h1>

        <p className="mt-8 max-w-xl font-poppins text-xl tracking-wide text-paper sm:text-2xl md:text-3xl">
         
A Nigerian researcher creates affordable, biodegradable pads to keep girls in school and protect the environment.
        </p>

        {/* Watch Film */}
        <button
          onClick={() => setIsOpen(true)}
          className="group mt-10 flex w-fit items-center gap-4 border-b border-yellow pb-3 font-poppins text-sm font-semibold tracking-[0.25em] text-paper transition-colors hover:text-yellow"
        >
          <span>WATCH FILM</span>
          <span className="text-yellow transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </button>
      </div>

      {/* YouTube Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-6xl overflow-hidden bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white transition-colors hover:bg-yellow hover:text-black"
            >
              ×
            </button>

            {/* Embedded YouTube player */}
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/QQFyz9hl7nw"
              title="We Used to Stay Home During Our Periods"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
