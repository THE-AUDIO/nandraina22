export interface EducationEntry {
  id: string;
  degree: string;
  school: string;
  period: { start: string; end: string };
  details: string[];
}

export interface EducationSection {
  title: string;
  entries: EducationEntry[];
}

export const educationSection: EducationSection = {
  title: "Une base académique solide, doublée de pratique terrain",
  entries: [
    {
      id: "ispm",
      degree: "Licence en Informatique",
      school: "ISPM — Institut Supérieur Polytechnique de Madagascar",
      period: { start: "12/2022", end: "Aujourd'hui" },
      details: [
        "Dernière année",
        "Mémoire : PoC pipeline CI/CD staging/production",
        "Projets réels déployés en production",
      ],
    },
    {
      id: "sesame",
      degree: "Année préparatoire",
      school: "SESAME",
      period: { start: "11/2021", end: "09/2022" },
      details: ["Fondations scientifiques et techniques"],
    },
  ],
};
