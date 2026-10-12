import React from 'react';
import { GlassWater, AlertOctagon, Wine, Sparkles } from 'lucide-react';

export const SectionSmartDrinks: React.FC = () => {
  const drinkComparisons = [
    {
      original: 'Cerveja',
      alternative: 'Uma cerveja menor, uma versão sem álcool ou água entre as bebidas.',
      insight: 'Diminui a sobrecarga e mantém você fresca sob o sol.',
    },
    {
      original: 'Gin tônica',
      alternative: 'Um drink preparado com menos álcool, mais água tônica e sem doses extras.',
      insight: 'Peça com bastante gelo e fatias de limão ou especiarias.',
    },
    {
      original: 'Caipirinha',
      alternative: 'Uma versão com menos açúcar — lembrando que ainda contém álcool.',
      insight: 'Adoçante ou menos xarope não elimina os efeitos do álcool.',
    },
    {
      original: 'Refrigerante ou drink doce',
      alternative: 'Água com gás bem gelada, limão espremido ou um mocktail sem álcool.',
      insight: 'Refrescante, hidrata de verdade e não pesa no estômago.',
    },
  ];

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-amber-700">Módulo 04</span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900 mt-1">
            4. Bebidas e drinks inteligentes
          </h3>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-amber-100/70 text-amber-800 flex items-center justify-center shrink-0">
          <Wine className="w-5 h-5 text-amber-700" />
        </div>
      </div>

      {/* Core Principle */}
      <div className="space-y-3 text-sm sm:text-base text-stone-700 leading-relaxed">
        <p>
          A bebida com menos álcool é a que você deixa de beber. Se optar por beber, vale escolher uma bebida que você goste, prestar atenção à quantidade e intercalar com opções sem álcool.
        </p>
        <p className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 text-stone-800 text-xs sm:text-sm font-medium">
          O tipo de bebida, sozinho, não torna o álcool livre de riscos; a quantidade consumida também importa. Beber menos reduz riscos, e não beber é sempre uma opção válida e respeitada.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
          Tabela de Trocas e Moderações Inteligentes
        </h4>
        <div className="grid grid-cols-1 gap-3">
          {drinkComparisons.map((item) => (
            <div
              key={item.original}
              className="p-4 sm:p-5 rounded-2xl bg-amber-50/40 border border-amber-200/60 space-y-2 hover:bg-amber-50/70 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900 bg-amber-200/70 px-2.5 py-1 rounded-lg">
                  Se costuma escolher: {item.original}
                </span>
                <span className="text-[11px] text-stone-500">Sugestão</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm sm:text-base font-bold text-stone-900">
                  {item.alternative}
                </p>
                <p className="text-xs text-stone-600 flex items-center gap-1.5 pt-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{item.insight}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Crucial Health & Safety Warning */}
      <div className="p-4 sm:p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 space-y-2">
        <div className="flex items-center gap-2">
          <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0" />
          <h4 className="text-sm font-bold">Importante saber:</h4>
        </div>
        <p className="text-xs sm:text-sm leading-relaxed">
          <strong>“Fit”, “light” ou “com menos açúcar” não significa sem álcool.</strong>
        </p>
        <p className="text-xs sm:text-sm leading-relaxed text-rose-900/90">
          Gravidez ou possibilidade de gravidez, direção de veículos, uso de medicamentos que interagem com álcool e certas condições de saúde são situações mandatórias para evitar qualquer consumo de bebida alcoólica.
        </p>
      </div>
    </section>
  );
};
