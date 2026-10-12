export type TabKey = 'intro' | 'preevento' | 'churrasco' | 'bebidas' | 'segunda' | 'checklist';

export interface ChecklistItem {
  id: string;
  category: 'antes' | 'durante' | 'segunda';
  text: string;
  detail?: string;
}

export interface FoodOption {
  craving: string;
  suggestion: string;
  category: 'carne' | 'acompanhamento' | 'opcoes' | 'sobremesa';
  tip?: string;
}

export interface DrinkOption {
  original: string;
  alternative: string;
  insight: string;
  alcoholInfo: string;
}
