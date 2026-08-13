export interface MethodStep {
  id: string;
  number: string;
  title: string;
  description: string;
  /** Icône lucide-react (nom exporté du module). */
  icon: string;
}

export interface MethodSection {
  title: string;
  steps: MethodStep[];
}

export const methodSection: MethodSection = {
  title: "De l'idée au déploiement, une méthode claire",
  steps: [
    {
      id: "cadrer",
      number: "01",
      title: "Cadrer le besoin et l'architecture",
      description:
        "Comprendre l'objectif, définir le périmètre, choisir la stack adaptée au besoin réel — pas au stack du moment.",
      icon: "Compass",
    },
    {
      id: "concevoir",
      number: "02",
      title: "Concevoir l'UI/UX et l'API",
      description:
        "Prototyper l'expérience utilisateur et dessiner les contrats d'API avant d'écrire une ligne de code.",
      icon: "PenTool",
    },
    {
      id: "developper",
      number: "03",
      title: "Développer et tester",
      description:
        "Itérations rapides, code typé, revue continue et tests pour livrer un produit fiable.",
      icon: "Code2",
    },
    {
      id: "deployer",
      number: "04",
      title: "Conteneuriser et déployer (CI/CD)",
      description:
        "Docker, pipelines GitHub Actions et environnement de déploiement automatisé — de la branche à la production.",
      icon: "Rocket",
    },
  ],
};
