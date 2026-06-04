import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Showcase } from "@/components/portfolio/Showcase";
import { Services } from "@/components/portfolio/Services";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auralystic — Medical Conference Graphic Design, Thanjavur" },
      {
        name: "description",
        content:
          "Auralystic is a Thanjavur-based graphic design studio specialising in medical conference visuals — flex banners, entrance arches, stage backdrops, and brochures across South India.",
      },
      { property: "og:title", content: "Auralystic — Medical Conference Graphic Design" },
      {
        property: "og:description",
        content:
          "Editorial design for medical conferences: arches, stage backdrops, flex, and brochures. Based in Thanjavur, working across South India.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Showcase />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
