export type ExperienceType = "Stage" | "Freelance";

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: ExperienceType;
  period: { start: string; end: string };
  tags: string[];
  quote: string;
}

export const experiences: Experience[] = [
  {
    id: "connecteo",
    company: "Connecteo",
    role: "Développeur Stagiaire",
    type: "Stage",
    period: { start: "09/2025", end: "11/2025" },
    tags: ["Dashboard", "CI/CD", "PostgreSQL distribué"],
    quote:
      "Conception d'un tableau de bord de suivi d'activités, initiation aux pipelines CI/CD, découverte de Citus.",
  },
  {
    id: "randevteam",
    company: "RanDevTeam",
    role: "Développeur React Native",
    type: "Stage",
    period: { start: "11/2024", end: "01/2025" },
    tags: ["React Native", "E-commerce", "Flux critiques"],
    quote:
      "App mobile e-commerce : fiches produits, panier, commande, debug des flux critiques et mise à jour des composants UI.",
  },
  {
    id: "nextrocket",
    company: "NextRocket",
    role: "Développeur JavaScript",
    type: "Freelance",
    period: { start: "02/2024", end: "03/2024" },
    tags: ["Web scraping", "UI front-end"],
    quote:
      "Automatisation de web scraping et développement d'UI front-end pour un client.",
  },
];
