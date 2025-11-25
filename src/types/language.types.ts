// src/types/language.types.ts

/**
 * 支援的語言枚舉
 * 定義應用程式中所有可用的語言選項
 */
export enum SupportedLanguage {
  English = "en",
  Chinese = "zh",
}

export type LanguageKey = `${SupportedLanguage}`;
