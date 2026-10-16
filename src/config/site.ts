export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    robloxGroup?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Build and Conquer Wiki",
  shortName: "Build and Conquer",
  logoText: "BC",
  tagline: "City Building, Research & Modern Warfare Guides",
  description: "Your ultimate guide to Build and Conquer on Roblox! Explore city levels, resources, research trees, missiles, drones, beginner tips and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://buildandconquer.top",
  supportEmail: "support@buildandconquer.top",
  gameUrl: "https://www.roblox.com/games/103767961452227/Build-and-Conquer",
  heroVideoId: "ufMki8BQKzc", // Build and Conquer city level (2/3/4) & population tutorial
  social: {
    discord: "https://discord.gg/slopcompany", // Official: The Slop Company Discord
    robloxGroup: "https://www.roblox.com/groups/52990522", // Official: The Slop Company Roblox group
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
