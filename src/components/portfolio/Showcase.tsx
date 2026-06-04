import { useEffect, useMemo, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { CATEGORIES, projects, type Category } from "@/data/projects";

type Filter = "All" | Category;
const FILTERS: Filter[] = ["All", ...CATEGORIES];

export function Showcase() {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + visible.length) % visible.length)),
    [visible.length],
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, prev, next]);

  const active = activeIndex !== null ? visible[activeIndex] : null;

  return (
    <section id="work" className="border-t border-border/60 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/60">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-6xl">
              A portfolio of conference moments.
            </h2>
            <p className="mt-5 text-foreground/70">
              Click any piece to view it full-screen with notes on the concept and craft.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
                  filter === f
                    ? "border-gold bg-gold text-primary-foreground"
                    : "border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <motion.button
              key={p.id}
              layout
              onClick={() => setActiveIndex(i)}
              className="group relative block overflow-hidden bg-secondary text-left"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/30" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{p.category}</p>
                <p className="mt-1 font-display text-xl text-primary-foreground">{p.title}</p>
              </div>
              <div className="flex items-center justify-between border-t border-border/60 px-4 py-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/55">
                  {p.category}
                </span>
                <span className="text-xs text-foreground/65">{p.year}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur"
            onClick={close}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground"
              aria-label="Close"
            >
              <X size={26} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 z-10 text-primary-foreground/70 hover:text-gold md:left-8"
              aria-label="Previous"
            >
              <ChevronLeft size={42} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 z-10 text-primary-foreground/70 hover:text-gold md:right-8"
              aria-label="Next"
            >
              <ChevronRight size={42} />
            </button>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-5 md:px-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:col-span-3">
                <div className="overflow-hidden bg-paper/5">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="max-h-[75vh] w-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center text-primary-foreground md:col-span-2">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold">
                  <span>{active.category}</span>
                  <span className="h-px w-8 bg-gold/60" />
                  <span className="text-primary-foreground/60">
                    {String(activeIndex! + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
                  {active.title}
                </h3>
                <p className="mt-3 text-sm text-primary-foreground/70">
                  {active.client} · {active.year}
                </p>
                <div className="my-6 h-px w-16 bg-gold" />
                <p className="text-base leading-relaxed text-primary-foreground/85">
                  {active.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
