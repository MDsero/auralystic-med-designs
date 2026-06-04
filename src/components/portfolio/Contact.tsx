import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Contact</p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Designing your next conference?
            <br />
            <span className="italic text-gold">Let's begin.</span>
          </h2>
          <div className="mt-12 space-y-5 text-primary-foreground/85">
            <a href="mailto:info@auralystic.com" className="flex items-center gap-4 hover:text-gold">
              <Mail size={18} className="text-gold" />
              <span>info@auralystic.com</span>
            </a>
            <a href="tel:+919080773449" className="flex items-center gap-4 hover:text-gold">
              <Phone size={18} className="text-gold" />
              <span>+91 90807 73449</span>
            </a>
            <div className="flex items-center gap-4">
              <MapPin size={18} className="text-gold" />
              <span>Thanjavur, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        <form
          className="md:col-span-6 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            const subject = encodeURIComponent(`Project inquiry — ${data.get("event") || "Conference"}`);
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nEvent: ${data.get("event")}\n\n${data.get("message")}`,
            );
            window.location.href = `mailto:info@auralystic.com?subject=${subject}&body=${body}`;
          }}
        >
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60">
              Name
            </label>
            <input
              required
              name="name"
              className="mt-2 w-full border-b border-primary-foreground/30 bg-transparent py-2 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              className="mt-2 w-full border-b border-primary-foreground/30 bg-transparent py-2 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60">
              Conference / Event
            </label>
            <input
              name="event"
              className="mt-2 w-full border-b border-primary-foreground/30 bg-transparent py-2 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={4}
              className="mt-2 w-full resize-none border-b border-primary-foreground/30 bg-transparent py-2 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-gold focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-4 border border-gold bg-gold px-8 py-3 text-sm tracking-wide text-primary transition-colors hover:bg-transparent hover:text-gold"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
