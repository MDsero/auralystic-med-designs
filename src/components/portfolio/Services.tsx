const services = [
  {
    name: "Flex Banners",
    desc: "Roll-up and free-standing flex for registration desks, foyers, and informational signage — designed to read instantly at venue scale.",
  },
  {
    name: "Entrance Arches",
    desc: "Monumental welcome arches that frame the threshold of your conference, blending classical motif with conference identity.",
  },
  {
    name: "Stage Backdrops",
    desc: "LED-ready and print backdrops engineered for camera, lighting, and sponsor hierarchy across plenary halls.",
  },
  {
    name: "Brochures & Collateral",
    desc: "Programs, abstract books, delegate kits, invitations — produced as editorial objects, not flyers.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border/60 bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/60">Services</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Every surface of the conference, considered.
            </h2>
          </div>
          <div className="md:col-span-8">
            <ul className="grid gap-px bg-border sm:grid-cols-2">
              {services.map((s, i) => (
                <li key={s.name} className="bg-background p-8">
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs text-gold">0{i + 1}</span>
                    <h3 className="font-display text-2xl">{s.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
