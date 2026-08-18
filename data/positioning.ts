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
      point: "Autonomie du besoin à la production",
      contrast: "vs code seul",
    },
    {
      id: "devops",
      point: "Docker, K8s, CI/CD dès la première année de carrière",
      contrast: "vs découverte tardive",
    },
    {
      id: "ia",
      point: "IA intégrée en produit (FeoSync, RAG) — pas juste en démo",
      contrast: "vs usage ponctuel",
    },
    {
      id: "adaptabilite",
      point: "5 projets sur 4 stacks différents en 2 ans",
      contrast: "vs parcours linéaire",
    },
  ],
};
