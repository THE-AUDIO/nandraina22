export interface Profile {
  name: string;
  shortName: string;
  monogram: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  githubHandle: string;
  linkedin: string;
  linkedinHandle: string;
  cvUrl: string;
  hero: {
    availability: string;
    headline: string;
    highlight: string;
    role: string;
    subtitle: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
  finalCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    reinforcement: string;
  };
}

export const profile: Profile = {
  name: "THE Audio Nandraina",
  shortName: "Nandraina",
  monogram: "TA",
  title: "Développeur Full Stack | AI",
  tagline:
    "Développeur Full Stack et DevOps — du prototype à la production avec Angular, Spring Boot, FastAPI, Docker, Kubernetes et IA.",
  location: "Antananarivo, Madagascar",
  email: "nandraina.dev22@gmail.com",
  phone: "+261 34 26 450 77",
  github: "https://github.com/THE-AUDIO",
  githubHandle: "THE-AUDIO",
  linkedin: "https://www.linkedin.com/in/nadraina22",
  linkedinHandle: "nadraina22",
  cvUrl: "/cv-nandraina.pdf",
  hero: {
    availability: "Disponible pour de nouvelles opportunités",
    headline: "Je conçois des applications qui fonctionnent en production",
    highlight: "fonctionnent en production",
    role: "THE Audio Nandraina · Développeur Fullstack & DevOps",
    subtitle:
      "Développeur Fullstack & DevOps basé à Antananarivo, Madagascar. Je conçois des applications web avec Angular et Next.js, des APIs performantes avec Spring Boot et FastAPI, et j'automatise leur mise en production avec Docker, Kubernetes et des pipelines CI/CD — du premier commit au déploiement.",
    ctaPrimary: { label: "Voir mes projets", href: "#work" },
    ctaSecondary: { label: "Télécharger mon CV", href: "/cv-nandraina.pdf" },
  },
  finalCta: {
    eyebrow: "Travaillons ensemble",
    title: "Discutons de votre projet",
    subtitle:
      "Réponse sous 48h, que ce soit pour un stage, une mission freelance ou une opportunité en entreprise.",
    ctaPrimary: { label: "Me contacter", href: "mailto:nandraina.dev22@gmail.com" },
    ctaSecondary: { label: "Voir mes projets", href: "#work" },
    reinforcement:
      "Étudiant en dernière année de Licence Informatique à l'ISPM, avec 3 expériences en stage et freelance et 2 victoires en hackathon.",
  },
};
