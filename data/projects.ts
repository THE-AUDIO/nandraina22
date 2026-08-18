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
      "SaaS multi-tenant de planification de posts et de génération de contenu IA. Architecture conteneurisée et scalable.",
    stack: ["FastAPI", "Next.js", "Kubernetes", "PostgreSQL"],
    metrics: ["Multi-tenant", "Planification", "Génération IA"],
    href: undefined,
    image: {
      src: "/projets/feosync.png",
      alt: "FeoSync - SaaS de planification de posts",
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
      "Assistant RAG indexant la documentation d'infrastructure pour répondre en langage naturel aux questions d'exploitation.",
    stack: ["FastAPI", "Angular", "LangChain", "PostgreSQL"],
    metrics: ["Indexation doc", "Q&A natif"],
    href: undefined,
    image: {
      src: "/projets/rag-doc.png",
      alt: "Assistant RAG documentaire",
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
      "PoC de pipeline CI/CD avec séparation staging/production : build, tests, qualité SonarQube, conteneurisation et déploiement automatisé.",
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
      "Application mobile e-commerce : fiches produits, panier et parcours de commande, avec debug des flux critiques.",
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
      "Tableau de bord de suivi d'activités, avec initiation aux pipelines CI/CD et découverte de Citus (PostgreSQL distribué).",
    stack: ["Angular", "PostgreSQL", "Citus"],
    metrics: ["Suivi activités", "PostgreSQL distribué"],
    href: undefined,
    image: undefined,
  },
];
