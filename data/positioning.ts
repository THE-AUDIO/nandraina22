export interface PositioningItem {
  id: string;
  point: string;
  contrast: string;
}

export interface PositioningSection {
  title: string;
  intro: string;
  items: PositioningItem[];
}

export const positioningSection: PositioningSection = {
  title: "Ce que j'apporte, par rapport à un profil junior classique",
  intro: "Un positionnement, pas une comparaison commerciale.",
  items: [
    {
      id: "autonomie",
      point: "Autonomie du besoin à la prod",
      contrast: "vs code seul",
    },
    {
      id: "devops",
      point: "Culture DevOps dès le début de carrière",
      contrast: "vs découverte tardive",
    },
    {
      id: "ia",
      point: "Intégration IA dans le workflow quotidien",
      contrast: "vs usage ponctuel",
    },
    {
      id: "adaptabilite",
      point: "Adaptabilité démontrée par la diversité des missions",
      contrast: "vs parcours linéaire",
    },
  ],
};
