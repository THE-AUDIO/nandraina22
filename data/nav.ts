export interface NavLink {
  label: string;
  href: string;
}

export interface NavConfig {
  links: NavLink[];
  cta: { label: string; href: string };
}

export const nav: NavConfig = {
  links: [
    { label: "Projets", href: "/#work" },
    { label: "Compétences", href: "/#stack" },
    { label: "Expérience", href: "/#experience" },
    { label: "Distinctions", href: "/#awards" },
    { label: "Contact", href: "/#contact" },
  ],
  cta: { label: "Me contacter", href: "/#contact" },
};
