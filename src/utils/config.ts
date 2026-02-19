export const SITE = {
  title: "Omoshola Owolabi",
  website: "https://omoshola.me",
  description:
    "Building AI agents and the infrastructure they run on. Focused on financial resilience — from risk intelligence to regulatory governance — where the gap between AI capability and institutional trust is still wide open.",
  author: "Omoshola Owolabi",
  handle: "@omoshola",
  url: "https://omoshola.me",
  ogImage: "/omoshola-avatar.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/omoshola-o",
    label: "Omoshola on GitHub",
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/HowolarbyM",
    label: "Omoshola on X",
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/omosholaowolabi/",
    label: "Omoshola on LinkedIn",
    active: true,
  },
  {
    name: "Email",
    href: "mailto:owolabi.omoshola@outlook.com",
    label: "Send an email to Omoshola",
    active: true,
  },
] as const;

export const GITHUB_REPO = "https://github.com/omoshola-o/omoshola.me";

export const SHARE_LINKS = [
  { name: "X", href: "https://x.com/intent/tweet?text=", icon: "x" },
  { name: "LinkedIn", href: "https://www.linkedin.com/sharing/share-offsite/?url=", icon: "linkedin" },
  { name: "WhatsApp", href: "https://wa.me/?text=", icon: "whatsapp" },
  { name: "Facebook", href: "https://www.facebook.com/sharer/sharer.php?u=", icon: "facebook" },
  { name: "Telegram", href: "https://t.me/share/url?url=", icon: "telegram" },
  { name: "Pinterest", href: "https://pinterest.com/pin/create/button/?url=", icon: "pinterest" },
  { name: "Email", href: "mailto:?subject=", icon: "email" },
] as const;

export const NAV_ITEMS = [
  { label: "Posts", href: "/posts" },
  { label: "About", href: "/about" },
  { label: "Search", href: "/search" },
] as const;
