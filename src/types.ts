export type Language = 'fr' | 'en';

export interface Ingredient {
  id: string;
  name: { fr: string; en: string };
  baseAmount: number;
  unit: string;
  notes?: { fr: string; en: string };
  category: 'base' | 'liquide' | 'gras' | 'arome';
}

export interface RecipeStep {
  id: number;
  title: { fr: string; en: string };
  duration: string;
  instruction: { fr: string; en: string };
  proTip?: { fr: string; en: string };
}

export interface FaqItem {
  id: string;
  question: { fr: string; en: string };
  answer: { fr: string; en: string };
}
