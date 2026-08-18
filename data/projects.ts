export type ProjectCategory =
  | "SaaS"
  | "AI / RAG"
  | "DevOps"
  | "Mobile App"
  | "Dashboard";

export type ProjectTone = "indigo" | "slate" | "amber" | "emerald" | "rose";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  name: string;
  categories: ProjectCategory[];
  year: string;
  role: string;
  description: string;
  stack: string[];
  metrics?: string[];
  href?: string;
  /** Tonalité du placeholder tant que l'image n'est pas fournie. */
  placeholderTone: ProjectTone;
  /** À compléter : demander captures + lien avant finalisation. */
  image?: ProjectImage;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "feosync",
    name: "FeoSync",
    categories: ["SaaS"],
    year: "2025",
    role: "Développeur Full Stack",
    placeholderTone: "indigo",
    description:
      "SaaS multi-tenant de planification de posts et de génération de contenu IA. J'ai conçu l'architecture conteneurisée (Kubernetes), développé l'API FastAPI et l'interface Next.js. Le système gère la planification de contenu, la génération assistée par IA et le multi-tenant avec PostgreSQL.",
    stack: ["FastAPI", "Next.js", "Kubernetes", "PostgreSQL"],
    metrics: ["Multi-tenant", "Planification", "Génération IA"],
    href: undefined,
    image: {
      src: "/projets/feosync.png",
      alt: "Interface du SaaS FeoSync montrant le tableau de bord de planification de posts avec génération de contenu IA",
    },
    featured: true,
  },
  {
    id: "rag-doc",
    name: "Assistant RAG documentaire",
    categories: ["AI / RAG"],
    year: "2025",
    role: "Développeur Backend & IA",
    placeholderTone: "slate",
    description:
      "Assistant RAG (Retrieval-Augmented Generation) indexant la documentation d'infrastructure pour répondre en langage naturel aux questions d'exploitation. Développé avec FastAPI et LangChain, il indexe les documents, effectue la recherche sémantique et génère des réponses contextuelles via Angular.",
    stack: ["FastAPI", "Angular", "LangChain", "PostgreSQL"],
    metrics: ["Indexation doc", "Q&A natif"],
    href: undefined,
    image: {
      src: "/projets/rag-doc.png",
      alt: "Interface de l'assistant RAG documentaire posant une question sur l'infrastructure et recevant une réponse contextuelle",
    },
    featured: true,
  },
  {
    id: "pipeline-cicd",
    name: "Pipeline CI/CD",
    categories: ["DevOps"],
    year: "2025",
    role: "PoC — Mémoire de fin d'études",
    placeholderTone: "emerald",
    description:
      "Preuve de concept de pipeline CI/CD avec séparation staging/production pour mon mémoire de fin d'études. Le pipeline intègre le build, les tests automatisés, l'analyse de qualité SonarQube, la conteneurisation Docker et le déploiement automatisé avec Ansible.",
    stack: ["GitHub Actions", "SonarQube", "Docker", "Ansible"],
    metrics: ["Staging / Prod", "Qualité auto"],
    href: undefined,
    image: undefined,
  },
  {
    id: "ecommerce-mobile",
    name: "App e-commerce mobile",
    categories: ["Mobile App"],
    year: "2025",
    role: "Développeur React Native",
    placeholderTone: "rose",
    description:
      "Application mobile e-commerce développée en React Native chez RanDevTeam. J'ai implémenté les fiches produits, le panier, le parcours de commande et debugué les flux critiques de paiement et de validation.",
    stack: ["React Native", "TypeScript"],
    metrics: ["Fiches produits", "Panier", "Commande"],
    href: undefined,
    image: undefined,
  },
  {
    id: "dashboard-connecteo",
    name: "Dashboard de suivi d'activités",
    categories: ["Dashboard"],
    year: "2025",
    role: "Développeur (Stage Connecteo)",
    placeholderTone: "amber",
    description:
      "Tableau de bord de suivi d'activités en stage chez Connecteo. J'ai développé l'interface Angular, initié les pipelines CI/CD de l'équipe et découvert Citus pour le PostgreSQL distribué sur de gros volumes de données.",
    stack: ["Angular", "PostgreSQL", "Citus"],
    metrics: ["Suivi activités", "PostgreSQL distribué"],
    href: undefined,
    image: undefined,
  },
];
