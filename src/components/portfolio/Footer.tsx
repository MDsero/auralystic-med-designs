export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-display text-xl">
          Auralystic<span className="text-gold">.</span>
        </p>
        <p className="text-xs uppercase tracking-[0.25em] text-foreground/55">
          © {new Date().getFullYear()} Auralystic · Thanjavur
        </p>
      </div>
    </footer>
  );
}
