export interface NavItem {
  key: string;
  path: string;
  isContentType: boolean;
}

/**
 * 站点导航配置。
 * 本阶段（Part 3）清空内容型导航，仅保留空数组占位；
 * CONTENT_TYPES 由本配置派生，保证列表页/站点地图与导航始终同源。
 */
export const NAVIGATION_CONFIG: NavItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
