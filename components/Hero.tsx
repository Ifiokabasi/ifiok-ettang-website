export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-ink">
      {/* Background still — swap /images/hero-hz-thumb.jpg for your own frame grab */}
      <div className="absolute inset-0">
        <video
            src="/videos/hero_vulture.mp4"
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
        <p className="mb-4 font-poppins text-sm tracking-[0.3em] text-paper/70">
          FEATURED FILM
        </p>
        <h1 className="font-inter text-[15vw] font-black leading-[0.9] text-yellow sm:text-[9vw] md:text-[110px] lg:text-[128px]">
          KING
          <span className="mx-3 align-middle font-poppins text-[6vw] font-normal text-white sm:text-3xl md:text-4xl">
            OF
          </span>
          <br />
          VULTURES
        </h1>
        <p className="mt-8 max-w-xl font-poppins text-xl tracking-wide text-paper sm:text-2xl md:text-3xl">
          The man racing to save Nigeria&rsquo;s disappearing birds
        </p>
      </div>
    </section>
  );
}
