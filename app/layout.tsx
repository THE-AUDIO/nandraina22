import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nandraina — Développeur Fullstack & DevOps à Antananarivo, Madagascar",
  description:
    "Développeur Fullstack & DevOps basé à Antananarivo, Madagascar. Angular, Next.js, Spring Boot, FastAPI, Docker, Kubernetes, CI/CD et IA — du prototype à la production.",
  keywords: [
    "développeur fullstack",
    "développeur fullstack Antananarivo",
    "développeur fullstack Madagascar",
    "développeur DevOps Madagascar",
    "developer portfolio",
    "Angular",
    "Next.js",
    "Spring Boot",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "GitHub Actions",
    "TypeScript",
    "Python",
    "Java",
    "PostgreSQL",
    "DevOps",
    "intelligents artificielle",
    "RAG",
    "LLM",
    "Madagascar",
    "Antananarivo",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Nandraina — Développeur Fullstack & DevOps à Antananarivo, Madagascar",
    description:
      "Développeur Fullstack & DevOps à Antananarivo, Madagascar. Applications web, APIs, Docker, Kubernetes et CI/CD.",
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Nandraina — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandraina — Développeur Fullstack & DevOps à Antananarivo, Madagascar",
    description:
      "Développeur Fullstack & DevOps à Antananarivo, Madagascar. Applications web, APIs, Docker, Kubernetes et CI/CD.",
    images: [`${SITE_URL}/og-image.png`],
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "gGsK3zoKc0AnwM0y54id8hkznizEQviDKy5GWkyL1Lo",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "THE Audio Nandraina",
  alternateName: "Nandraina",
  jobTitle: "Développeur Fullstack & DevOps",
  url: SITE_URL,
  email: "nandraina.dev22@gmail.com",
  telephone: "+261342645077",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antananarivo",
    addressCountry: "MG",
  },
  sameAs: [
    "https://github.com/THE-AUDIO",
    "https://www.linkedin.com/in/nadraina22",
  ],
  knowsAbout: [
    "Angular",
    "Spring Boot",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "Helm",
    "GitHub Actions",
    "CI/CD",
    "Ansible",
    "TypeScript",
    "Python",
    "Java",
    "PostgreSQL",
    "MySQL",
    "scikit-learn",
    "Matplotlib",
    "RAG",
    "LLM",
    "DevOps",
    "Développement Full Stack",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Licence en Informatique",
    recognizedBy: {
      "@type": "EducationalOrganization",
      name: "ISPM",
    },
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "ISPM",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nandraina — Portfolio",
  url: SITE_URL,
  description:
    "Portfolio de THE Audio Nandraina, développeur Full Stack et DevOps.",
  inLanguage: "fr",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
