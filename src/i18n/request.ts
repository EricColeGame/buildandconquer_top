import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import en from "@/locales/en.json";
import de from "@/locales/de.json";
import es from "@/locales/es.json";
import fr from "@/locales/fr.json";

type Messages = typeof en;

/**
 * 构建期静态打包的语言文件列表（next-intl 需要编译期可解析的 import）。
 * 必须与 routing.locales 完全一致；非英文文件为空对象时，
 * deepMerge 会回退到 en 的完整文案。
 */
const PACKED_LOCALES = ["en", "de", "es", "fr"] as const;

const messagesMap: Record<(typeof PACKED_LOCALES)[number], Partial<Messages>> = {
  en,
  de,
  es,
  fr,
};

function deepMerge<T>(base: T, override: Partial<T>): T {
  if (
    typeof base !== "object" ||
    base === null ||
    typeof override !== "object" ||
    override === null
  ) {
    return (override as T) ?? base;
  }

  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }

  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };

  for (const key of Object.keys(override as Record<string, unknown>)) {
    const baseValue = (base as Record<string, unknown>)[key];
    const overrideValue = (override as Record<string, unknown>)[key];
    if (overrideValue === undefined) continue;
    result[key] = deepMerge(baseValue as never, overrideValue as never);
  }

  return result as T;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const localeMessages = messagesMap[locale] ?? {};
  const messages = locale === "en" ? en : deepMerge(en, localeMessages);

  return { locale, messages };
});
