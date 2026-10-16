import { defineRouting } from "next-intl/routing";

/**
 * 唯一真相源：站点最终支持的语言集合。
 * 必须与以下三处完全一致：
 *   1. src/i18n/request.ts 的 messagesMap
 *   2. src/components/language-switcher.tsx 的 LOCALE_LABELS
 *   3. src/locales/*.json 的文件名集合
 */
export const locales = ["en", "de", "es", "fr"] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
