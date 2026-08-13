export interface Distinction {
  id: string;
  year: string;
  event: string;
  result: string;
  description: string;
}

export interface DistinctionsSection {
  title: string;
  intro: string;
  items: Distinction[];
}

export const distinctionsSection: DistinctionsSection = {
  title: "Je ne cours pas après les concours. Mais j'aime les gagner.",
  intro: "Quelques preuves, compétition sérieuse.",
  items: [
    {
      id: "stupid-hackathon",
      year: "2025",
      event: "Stupid Hackathon",
      result: "Gagnant",
      description: "Projet sélectionné devant jury — créativité technique et exécution rapide.",
    },
    {
      id: "devfest",
      year: "2024",
      event: "DevFest 2024",
      result: "Gagnant du Coding Challenge",
      description: "Challenge de code en temps limité — maîtrise des fondamentaux sous pression.",
    },
    {
      id: "hiu-ispm",
      year: "2022",
      event: "HiU ISPM",
      result: "Participation",
      description: "Première compétition tech — déclic pour la suite.",
    },
  ],
};
