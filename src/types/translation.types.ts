export interface Translation {
  title: string;
  subtitle: string;
  serviceHours: string;
  serviceHoursTime: string;
  serviceHoursWeekend: string;
  bookAppointment: string;
  whatsappUs: string;
  contactInfo: string;
  hotline: string;
  email: string;
  agreement: string;
  errorMessage: string;
  retry: string;
}

export interface Translations {
  en: Translation;
  zh: Translation;
}

export type Language = "en" | "zh";
