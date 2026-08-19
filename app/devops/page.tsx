import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Développeur DevOps Madagascar | Kubernetes, Docker, CI/CD — Nandraina",
  description:
    "Expertise DevOps : conteneurisation Docker, orchestration Kubernetes/Helm, pipelines CI/CD GitHub Actions, infrastructure as code Ansible et qualité SonarQube. Basé à Antananarivo, Madagascar.",
  alternates: {
    canonical: `${SITE_URL}/devops`,
  },
  openGraph: {
    title: "Développeur DevOps Madagascar | Kubernetes, Docker, CI/CD — Nandraina",
    description:
      "Expertise DevOps : Docker, Kubernetes, Helm, GitHub Actions, Ansible et SonarQube. Basé à Antananarivo, Madagascar.",
    url: `${SITE_URL}/devops`,
    type: "website",
    locale: "fr_FR",
  },
};

const competencies = [
  {
    eyebrow: "01 / Conteneurisation",
    title: "Docker",
    description:
      "Chaque application est conteneurisée avec Docker pour garantir la reproductibilité de l'environnement. Images optimisées en multi-stages, docker-compose pour le développement local, et Dockerfiles pensés pour la production.",
    tags: ["Docker", "Docker Compose", "Multi-stage builds"],
  },
  {
    eyebrow: "02 / Orchestration",
    title: "Kubernetes & Helm",
    description:
      "Kubernetes gère le déploiement, l'auto-scaling et la résilience des services en production. Helm simplifie la gestion des configurations par chart, avec des valeurs adaptées à chaque environnement — staging et production.",
    tags: ["Kubernetes", "Helm", "Charts", "Auto-scaling"],
  },
  {
    eyebrow: "03 / Intégration continue",
    title: "GitHub Actions & CI/CD",
    description:
      "Pipelines automatisés avec GitHub Actions : build, tests, analyse de qualité, conteneurisation et déploiement — de la branche à la production en quelques minutes. Chaque merge est un deploiement possible.",
    tags: ["GitHub Actions", "Pipelines", "Automatisation"],
  },
  {
    eyebrow: "04 / Infrastructure as Code",
    title: "Ansible",
    description:
      "Déploiement automatisé et reproductible avec Ansible. Playbooks pour la configuration des serveurs, le provisionnement et la mise à jour des environnements — sans intervention manuelle.",
    tags: ["Ansible", "Playbooks", "Provisionnement"],
  },
  {
    eyebrow: "05 / Qualité de code",
    title: "SonarQube",
    description:
      "Analyse continue de la qualité avec SonarQube intégré au pipeline : couverture de tests, dette technique, bugs et vulnérabilités — bloquant avant chaque mise en production.",
    tags: ["SonarQube", "Qualité", "Sécurité"],
  },
];

const devopsProjects = [
  {
    name: "Pipeline CI/CD",
    role: "PoC — Mémoire de fin d'études",
    description:
      "Preuve de concept de pipeline CI/CD avec séparation staging/production. Le pipeline intègre le build, les tests automatisés, l'analyse de qualité SonarQube, la conteneurisation Docker et le déploiement automatisé avec Ansible.",
    stack: ["GitHub Actions", "SonarQube", "Docker", "Ansible"],
  },
  {
    name: "FeoSync",
    role: "Développeur Full Stack",
    description:
      "Architecture conteneurisée sur Kubernetes pour un SaaS multi-tenant. Déploiement automatisé de l'API FastAPI et de l'interface Next.js, avec gestion des environnements staging et production.",
    stack: ["FastAPI", "Next.js", "Kubernetes", "PostgreSQL"],
  },
];

export default function DevOpsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                eyebrow="DevOps & Infrastructure"
                title="Expertise DevOps & Infrastructure"
                align="center"
              />
              <p className="mt-8 text-center text-base leading-relaxed text-inksoft md:text-lg">
                De la conteneurisation au déploiement automatisé — Docker,
                Kubernetes, Helm, GitHub Actions, Ansible et SonarQube. Je
                gère l&apos;ensemble du cycle de vie des applications, du premier
                commit à la production.
              </p>
              <p className="mt-4 text-center font-mono text-xs uppercase tracking-widest text-muted">
                Basé à Antananarivo, Madagascar
              </p>
            </div>
          </Container>
        </section>

        {/* Competencies */}
        {competencies.map((comp, i) => (
          <section
            key={comp.title}
            className={i % 2 === 0 ? "bg-surface py-20 md:py-28" : "bg-paper py-20 md:py-28"}
          >
            <Container>
              <div className="mx-auto max-w-3xl">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {comp.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  {comp.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-inksoft md:text-lg">
                  {comp.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {comp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-inksoft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        ))}

        {/* Projects */}
        <section className="bg-surface py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                eyebrow="Projets DevOps"
                title="Mise en pratique"
              />
              <div className="mt-12 flex flex-col gap-10">
                {devopsProjects.map((project) => (
                  <div
                    key={project.name}
                    className="rounded-2xl border border-line bg-paper p-8 md:p-10"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {project.role}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-inksoft md:text-base">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-inksoft"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-paper py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                Un projet DevOps à discuter?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-inksoft md:text-lg">
                Que ce soit pour conteneuriser une application, mettre en place
                un pipeline CI/CD ou déployer sur Kubernetes, je suis disponible
                pour en discuter.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink/80"
                >
                  Me contacter
                </Link>
                <Link
                  href="/#work"
                  className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface"
                >
                  Voir mes projets
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
