import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 md:grid-cols-12 md:pt-24 md:pb-32">
        <div className="md:col-span-7 flex flex-col justify-center">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-foreground/60">
            Graphic Design Studio · Thanjavur, South India
          </p>
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
            Design for medicine,
            <br />
            <span className="italic text-gold">made memorable.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
            Auralystic crafts the visual identity of medical conferences across South India —
            from entrance arches and stage backdrops to flex banners and brochures, executed
            with editorial discipline.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              View the Work
            </a>
            <a
              href="#contact"
              className="border border-foreground/30 px-6 py-3 text-sm tracking-wide text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              Start a Project
            </a>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-foreground/55">
            <span>Flex</span>
            <span className="text-gold">·</span>
            <span>Arch</span>
            <span className="text-gold">·</span>
            <span>Stage Backdrop</span>
            <span className="text-gold">·</span>
            <span>Brochure</span>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={hero}
              alt="Editorial arches representing Auralystic's conference design language"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 border border-foreground/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
