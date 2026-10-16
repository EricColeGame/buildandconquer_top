export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

/**
 * 站点导航配置。
 * 分类 slug 与 content/<locale>/ 下的文章子目录一一对应，
 * 同时作为翻译键（key）、URL 前缀（path）与内容类型（isContentType）。
 * CONTENT_TYPES 由本配置派生，保证列表页/站点地图与导航始终同源。
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "combat", path: "/combat", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export type NavigationKey = (typeof NAVIGATION_CONFIG)[number]["key"];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
