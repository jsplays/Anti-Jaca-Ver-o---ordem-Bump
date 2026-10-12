import React, { useState } from 'react';
import { Scale, CheckCircle2, Heart, PieChart, Sparkles } from 'lucide-react';

export const SectionRule8020: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'conceito' | 'pratica'>('conceito');

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-amber-700">Módulo 01</span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900 mt-1">
            1. A regra 80/20 — equilíbrio sem culpa
          </h3>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-amber-100/70 text-amber-800 flex items-center justify-center shrink-0">
          <Scale className="w-5 h-5" />
        </div>
      </div>

      {/* Main explanation text */}
      <div className="space-y-3 text-sm sm:text-base text-stone-700 leading-relaxed">
        <p>
          Talvez você já tenha ouvido falar da regra 80/20: priorizar hábitos que fazem bem na maior parte do tempo e deixar espaço para aproveitar ocasiões especiais. Pense nela como uma <strong>ideia de equilíbrio</strong>, não como uma conta exata ou uma regra que precisa ser cumprida perfeitamente.
        </p>
        <p className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/50 text-amber-950 font-medium">
          Comer algo diferente num sábado não apaga seus hábitos da semana. E você não precisa “merecer” a comida com exercício, nem compensar no dia seguinte com jejum.
        </p>
      </div>

      {/* Interactive Visualizer */}
      <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PieChart className="w-4 h-4 text-amber-600" />
            <h4 className="text-xs sm:text-sm font-bold text-stone-900">Visão da sua semana real</h4>
          </div>
          <div className="flex gap-1 p-0.5 bg-stone-200/60 rounded-lg">
            <button
              onClick={() => setActiveTab('conceito')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'conceito' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600'
              }`}
            >
              Proporção
            </button>
            <button
              onClick={() => setActiveTab('pratica')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'pratica' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600'
              }`}
            >
              Na Prática
            </button>
          </div>
        </div>

        {activeTab === 'conceito' ? (
          <div className="space-y-3">
            <div className="w-full bg-stone-200 rounded-full h-4 overflow-hidden flex">
              <div className="bg-emerald-600 h-full w-[80%] transition-all" title="80% Rotina saudável habitual" />
              <div className="bg-amber-500 h-full w-[20%] transition-all" title="20% Momentos sociais e celebração" />
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-emerald-200">
                <p className="font-bold text-emerald-800 text-sm">~80% Hábitos Base</p>
                <p className="text-stone-600 mt-1">Comida de verdade, água diária, sono regular, frutas e vegetais na maior parte da rotina.</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-amber-200">
                <p className="font-bold text-amber-800 text-sm">~20% Ocasiões</p>
                <p className="text-stone-600 mt-1">Churrasco com os amigos, sobremesa preferida, happy hour e praia sem cobranças.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1.5">
            <p className="font-bold text-stone-800">Em 21 refeições da semana (3 por dia):</p>
            <p>• Cerca de <strong>17 refeições</strong> são nutritivas e habituais.</p>
            <p>• Apenas <strong>3 a 4 momentos</strong> são de celebração ou eventos sociais.</p>
            <p className="text-amber-800 font-medium pt-1">
              Portanto, um churrasco isolado no fim de semana representa apenas uma fração minúscula do seu mês!
            </p>
          </div>
        )}
      </div>

      {/* Practical Action Steps */}
      <div className="space-y-3 pt-2">
        <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>O que fazer na prática?</span>
        </h4>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-3 p-3 rounded-2xl bg-amber-50/40 border border-amber-100">
            <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-stone-700">
              <strong>Curta o que realmente gosta</strong>, sem provar tudo só porque está disponível na mesa.
            </p>
          </li>
          <li className="flex items-start gap-3 p-3 rounded-2xl bg-amber-50/40 border border-amber-100">
            <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-stone-700">
              <strong>Coma com calma</strong> e perceba quando já está satisfeita (mastigue sem pressa e aproveite as conversas).
            </p>
          </li>
          <li className="flex items-start gap-3 p-3 rounded-2xl bg-amber-50/40 border border-amber-100">
            <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-stone-700">
              <strong>Se exagerar um pouco, tudo bem:</strong> na próxima refeição, volte ao seu ritmo habitual sem autocrítica.
            </p>
          </li>
        </ul>
      </div>

      {/* Bottom callout */}
      <div className="p-4 rounded-2xl bg-stone-900 text-stone-100 flex items-center gap-3">
        <Heart className="w-5 h-5 text-amber-400 shrink-0" />
        <p className="text-xs sm:text-sm font-medium leading-snug">
          <strong>O objetivo não é ter um fim de semana perfeito.</strong> É construir uma rotina possível de manter.
        </p>
      </div>
    </section>
  );
};
