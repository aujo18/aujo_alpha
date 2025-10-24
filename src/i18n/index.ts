import { en } from './en.js';
import { fr } from './fr.js';

export const translations = {
  en,
  fr
} as const;

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof en;
