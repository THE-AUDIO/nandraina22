export interface SoftSkill {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface SoftSkillsSection {
  title: string;
  items: SoftSkill[];
}

export const softSkillsSection: SoftSkillsSection = {
  title: "Ce qui ne se voit pas sur un dépôt Git",
  items: [
    {
      id: "adaptabilite",
      number: "001",
      title: "Adaptabilité et apprentissage rapide",
      icon: "Gauge",
      description:
        "Stage, freelance, hackathon, mémoire : je me suis formé à des stacks variées en contexte réel et sous contrainte.",
    },
    {
      id: "competitivite",
      number: "002",
      title: "Esprit compétitif et dépassement de soi",
      icon: "Trophy",
      description:
        "Deux victoires en compétition tech. J'aime la pression qui fait produire du code qui tient la route.",
    },
  ],
};
