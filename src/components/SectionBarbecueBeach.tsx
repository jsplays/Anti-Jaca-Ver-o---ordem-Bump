import React, { useState } from 'react';
import { Flame, Waves, Sparkles, Utensils, Citrus, Sun } from 'lucide-react';

export const SectionBarbecueBeach: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'carne' | 'acompanhamento' | 'opcoes' | 'sobremesa'>('todos');

  const options = [
    {
      category: 'carne',
      label: 'Carne',
      craving: 'Carne e proteínas do churrasco',
      suggestion: 'Escolha a que você gosta. Se quiser, alterne com frango ou cortes com menos gordura aparente.',
      highlight: 'Aproveite sem culpa e com atenção à saciedade.',
    },
    {
      category: 'acompanhamento',
      label: 'Acompanhamentos',
      craving: 'Farofa, pão de alho, arroz, saladas',
      suggestion: 'Monte um prato com os acompanhamentos que realmente quer provar. Salada, vinagrete, arroz, farofa e pão podem caber na ocasião.',
      highlight: 'O prato é seu: escolha o que tem significado para você hoje.',
    },
    {
      category: 'opcoes',
      label: 'Mais opções',
      craving: 'Mesa cheia de opções e petiscos',
      suggestion: 'Comece pelo que mais desperta sua vontade; você não precisa experimentar tudo só porque está lá.',
      highlight: 'Selecione suas preferências reais primeiro.',
    },
    {
      category: 'sobremesa',
      label: 'Sobremesa',
      craving: 'Doces, sorvetes e sobremesas',
      suggestion: 'Escolha a sua favorita e aproveite sem transformar isso em motivo para culpa.',
      highlight: 'Coma devagar, saboreando cada pedaço.',
    },
  ];

  const filteredOptions = activeCategory === 'todos' 
    ? options 
    : options.filter(o => o.category === activeCategory);

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-amber-700">Módulo 03</span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900 mt-1">
            3. No churrasco ou na praia: escolha com liberdade
          </h3>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-amber-100/70 text-amber-800 flex items-center justify-center shrink-0">
          <Flame className="w-5 h-5 text-orange-600" />
        </div>
      </div>

      <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
        Não existe uma carne “mágica” que impeça o ganho de gordura. O que você escolhe em uma ocasião não define seu resultado sozinho. Use este guia como apoio, não como lista de proibições.
      </p>

      {/* Filter Tabs for Mobile Scannability */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
        <button
          onClick={() => setActiveCategory('todos')}
          className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors min-h-[36px] ${
            activeCategory === 'todos'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          Todas as Vontades
        </button>
        <button
          onClick={() => setActiveCategory('carne')}
          className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors min-h-[36px] ${
            activeCategory === 'carne'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          Carnes
        </button>
        <button
          onClick={() => setActiveCategory('acompanhamento')}
          className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors min-h-[36px] ${
            activeCategory === 'acompanhamento'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          Acompanhamentos
        </button>
        <button
          onClick={() => setActiveCategory('sobremesa')}
          className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors min-h-[36px] ${
            activeCategory === 'sobremesa'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          Sobremesa
        </button>
      </div>

      {/* Choices Cards */}
      <div className="space-y-3">
        {filteredOptions.map((opt) => (
          <div
            key={opt.craving}
            className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2 hover:border-amber-300 transition-colors"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Se estiver com vontade de {opt.label}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-white border border-stone-200 text-stone-500 font-medium">
                Ideia simples
              </span>
            </div>
            <p className="text-sm sm:text-base font-bold text-stone-900 leading-snug">
              {opt.suggestion}
            </p>
            <p className="text-xs text-stone-600 flex items-center gap-1.5 pt-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{opt.highlight}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Seasonings & Beach Special Box */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {/* Seasoning Tips */}
        <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-2.5">
          <div className="flex items-center gap-2 text-amber-900">
            <Citrus className="w-5 h-5 text-amber-600" />
            <h4 className="text-sm font-bold">Para temperar com sabor</h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            Alho, limão espremido, ervas frescas (alecrim, chimichurri), pimenta e outros temperos dão muito sabor natural.
          </p>
          <p className="text-xs text-amber-800 font-medium bg-white/70 p-2.5 rounded-xl border border-amber-200/50">
            Dica de ouro: Use sal e molhos conforme seu gosto. Se quiser reduzir o excesso de sódio, deixe os molhos e temperos salgados à parte.
          </p>
        </div>

        {/* Beach Tips */}
        <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-200/70 space-y-2.5">
          <div className="flex items-center gap-2 text-sky-950">
            <Waves className="w-5 h-5 text-sky-600" />
            <h4 className="text-sm font-bold">Na praia sem perrengue</h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            Leve água fresca e, quando possível, uma opção de lanche que você goste (frutas resistentes, castanhas, sanduíche natural refrigerado).
          </p>
          <p className="text-xs text-sky-900 font-medium bg-white/70 p-2.5 rounded-xl border border-sky-200/50 flex items-center gap-1.5">
            <Sun className="w-4 h-4 text-amber-500 shrink-0" />
            <span>O mais importante é escolher algo prático e seguro para o calor — sem regras de “pode” e “não pode”.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
