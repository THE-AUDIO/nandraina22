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
    titleLines: string[];
    subtitle: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    reinforcement: string;
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
  tagline: "Développeur Full Stack qui conçoit, code et déploie — de l'UI à la CI/CD",
  location: "Antananarivo, Madagascar",
  email: "nandraina.dev22@gmail.com",
  phone: "+261 34 26 450 77",
  github: "https://github.com/THE-AUDIO",
  githubHandle: "THE-AUDIO",
  linkedin: "https://www.linkedin.com/in/nadraina22",
  linkedinHandle: "nadraina22",
  cvUrl: "/cv-nandraina.pdf",
  hero: {
    titleLines: [
      "THE Audio Nandraina ",
      "Développeur Full Stack",
    ],
    subtitle:"",
    ctaPrimary: { label: "Voir mes projets", href: "#work" },
    ctaSecondary: { label: "Télécharger mon CV", href: "/cv-nandraina.pdf" },
    reinforcement:
      "Étudiant en dernière année à l'ISPM, déjà en production sur des projets réels. Discutons de votre besoin.",
  },
  finalCta: {
    eyebrow: "Travaillons ensemble",
    title: "Discutons de votre projet",
    subtitle:
      "Réponse sous 48h, que ce soit pour un stage, une mission freelance ou une opportunité en entreprise.",
    ctaPrimary: { label: "Me contacter", href: "mailto:nandraina.dev22@gmail.com" },
    ctaSecondary: { label: "Voir mes projets", href: "#work" },
    reinforcement:
      "Étudiant en dernière année à l'ISPM, déjà en production sur des projets réels.",
  },
};
