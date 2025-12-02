// src/types/i18n.types.ts
import { SupportedLanguage } from "./language.types";

export interface TranslationEntry {
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  serviceHours: string;
  serviceHoursTime: string;
  serviceHoursWeekend: string;
  bookAppointment: string;
  whatsappUs: string;
  contactInfo: string;
  hotlineLabel: string;
  hotline: string;
  emailLabel: string;
  email: string;
  agreement: string;
  errorMessage: string;
  retry: string;
}

export type Translations = Record<SupportedLanguage, TranslationEntry>;
