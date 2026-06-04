import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import p9 from "@/assets/p9.jpg";
import p10 from "@/assets/p10.jpg";
import p11 from "@/assets/p11.jpg";
import p12 from "@/assets/p12.jpg";

export type Category = "Flex" | "Arch" | "Stage Backdrop" | "Brochure";

export interface Project {
  id: string;
  title: string;
  category: Category;
  client: string;
  year: number;
  image: string;
  description: string;
}

export const CATEGORIES: Category[] = ["Flex", "Arch", "Stage Backdrop", "Brochure"];

export const projects: Project[] = [
  {
    id: "cardio-summit-flex",
    title: "Cardiology Summit Flex",
    category: "Flex",
    client: "Tamil Nadu Cardiological Society",
    year: 2024,
    image: p1,
    description:
      "A vertical roll-up banner anchoring the registration desk. Deep navy field with a single gold anatomical heart, lifting the conference identity with restrained, editorial calm.",
  },
  {
    id: "pediatric-conclave-flex",
    title: "Pediatric Conclave Welcome Flex",
    category: "Flex",
    client: "IAP Thanjavur Chapter",
    year: 2024,
    image: p2,
    description:
      "A welcoming flex for the venue lobby — cream paper, a soft navy crest, and quiet symbolic marks. Designed to feel approachable for families while staying medically refined.",
  },
  {
    id: "diabetes-forum-flex",
    title: "Diabetes Forum Information Flex",
    category: "Flex",
    client: "Diabetic Care India",
    year: 2023,
    image: p3,
    description:
      "Dense informational flex with gold border, hierarchical typography, and sponsor lockups. Built for readability from across a crowded foyer.",
  },
  {
    id: "oncology-welcome-flex",
    title: "Oncology Congress Welcome Flex",
    category: "Flex",
    client: "South India Oncology Forum",
    year: 2024,
    image: p4,
    description:
      "Ribbon-led welcome flex pairing a sweep of navy silk with gold foil edges — a quiet nod to oncology awareness ribbons without literal iconography.",
  },
  {
    id: "apicon-arch",
    title: "APICON Grand Entrance Arch",
    category: "Arch",
    client: "Association of Physicians of India",
    year: 2024,
    image: p5,
    description:
      "A monumental entrance arch in navy and antiqued gold, framing the convention threshold. Ornament drawn from classical South Indian motifs, scaled for a national audience.",
  },
  {
    id: "neuro-summit-arch",
    title: "Neurology Summit Entrance Arch",
    category: "Arch",
    client: "Indian Academy of Neurology",
    year: 2023,
    image: p6,
    description:
      "A clean, sculptural arch crowned with a gold cerebral motif. Designed to read at distance and photograph cleanly for delegate selfies.",
  },
  {
    id: "oncology-mainstage",
    title: "Oncology Congress Mainstage",
    category: "Stage Backdrop",
    client: "South India Oncology Forum",
    year: 2024,
    image: p7,
    description:
      "A panoramic LED-ready backdrop. Geometric gold lattice flanks a centered serif title — built to hold its own behind a panel of speakers under strong stage lighting.",
  },
  {
    id: "diabetes-mainstage",
    title: "Diabetes Forum Sponsor Backdrop",
    category: "Stage Backdrop",
    client: "Diabetic Care India",
    year: 2023,
    image: p8,
    description:
      "A media-wall style backdrop balancing two dozen sponsor marks against a calm cream field, with a contoured navy canopy overhead.",
  },
  {
    id: "cardio-mainstage",
    title: "Cardiology Mainstage Backdrop",
    category: "Stage Backdrop",
    client: "Tamil Nadu Cardiological Society",
    year: 2024,
    image: p9,
    description:
      "A single golden ECG trace pulled across a midnight navy field. One idea, executed at full stage scale — the kind of backdrop that earns the room's first photograph.",
  },
  {
    id: "surgical-symposium-brochure",
    title: "Surgical Symposium Brochure",
    category: "Brochure",
    client: "Association of Surgeons of India",
    year: 2024,
    image: p10,
    description:
      "An eight-panel trifold with anatomical line illustrations and an editorial typographic spine. Heavy stock, gold ink accents, cover-to-program continuity.",
  },
  {
    id: "cme-program-booklet",
    title: "CME Program Booklet",
    category: "Brochure",
    client: "Thanjavur Medical College CME",
    year: 2023,
    image: p11,
    description:
      "A pocket-sized program guide with a navy soft cover and gold foil title. Designed for delegates to carry through three days of sessions without wear.",
  },
  {
    id: "pharma-conference-brochure",
    title: "Pharma Conference Brochure",
    category: "Brochure",
    client: "Indian Pharmaceutical Association",
    year: 2024,
    image: p12,
    description:
      "A multi-page editorial brochure with disciplined columns, gold rule work, and a quiet serif voice. Built to read like a journal, not a flyer.",
  },
];
