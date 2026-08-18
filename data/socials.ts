export type SocialPlatform = "github" | "linkedin" | "mail" | "globe";

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  label: string;
  handle: string;
  href: string;
}

export interface SocialsSection {
  title: string;
  links: SocialLink[];
}

export const socialsSection: SocialsSection = {
  title: "Me retrouver ailleurs",
  links: [
    {
      id: "github",
      platform: "github",
      label: "GitHub",
      handle: "THE-AUDIO",
      href: "https://github.com/THE-AUDIO",
    },
    {
      id: "linkedin",
      platform: "linkedin",
      label: "LinkedIn",
      handle: "nadraina22",
      href: "https://www.linkedin.com/in/nadraina22",
    },
    {
      id: "email",
      platform: "mail",
      label: "Email",
      handle: "nandraina.dev22@gmail.com",
      href: "mailto:nandraina.dev22@gmail.com",
    },
    {
      id: "portfolio",
      platform: "globe",
      label: "Portfolio",
      handle: "nandraina22.vercel.app",
      href: "#",
    },
  ],
};
