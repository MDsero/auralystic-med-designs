export function About() {
  return (
    <section id="about" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/60">About</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            A studio for the visual language of medicine.
          </h2>
        </div>
        <div className="md:col-span-7 space-y-5 text-foreground/75 md:text-lg md:leading-relaxed">
          <p>
            Auralystic is a graphic design studio based in Thanjavur, working with medical
            associations, conference organisers, and pharmaceutical sponsors across South India.
          </p>
          <p>
            We specialise in the full visual surface of a conference — arches, stage backdrops,
            flex, brochures, signage — with a single editorial sensibility. Every project balances
            clinical accuracy with the quiet ceremony a medical congress deserves.
          </p>
          <p>
            From local CME programs to national bodies like APICON and IMA chapters, our work
            aims to make the room feel composed before the first speaker steps on stage.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6">
            <div>
              <p className="font-display text-3xl text-gold">120+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-foreground/55">
                Conferences
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">40+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-foreground/55">
                Medical Bodies
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-gold">9 yrs</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-foreground/55">
                In Practice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
