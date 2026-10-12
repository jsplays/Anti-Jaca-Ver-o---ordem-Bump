import React, { useState, useEffect } from 'react';
import { GlassWater, Droplet, Wine, RefreshCw, AlertTriangle, ShieldCheck } from 'lucide-react';
import citrusWaterImage from '../assets/images/refreshing_citrus_water_1791841074411.jpg';

export const SectionHydrationTracker: React.FC = () => {
  const [alcoholDrinks, setAlcoholDrinks] = useState<number>(() => {
    const saved = localStorage.getItem('antijaca_tracker_drinks');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [waterGlasses, setWaterGlasses] = useState<number>(() => {
    const saved = localStorage.getItem('antijaca_tracker_water');
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('antijaca_tracker_drinks', alcoholDrinks.toString());
    localStorage.setItem('antijaca_tracker_water', waterGlasses.toString());
  }, [alcoholDrinks, waterGlasses]);

  const handleReset = () => {
    setAlcoholDrinks(0);
    setWaterGlasses(0);
  };

  const isBalanced = waterGlasses >= alcoholDrinks && alcoholDrinks > 0;
  const needsWater = alcoholDrinks > waterGlasses;

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-amber-700">Módulo 05</span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900 mt-1">
            5. Hidratação estratégica: água entre as bebidas
          </h3>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0">
          <GlassWater className="w-5 h-5 text-sky-600" />
        </div>
      </div>

      {/* Visual Refreshment Image */}
      <div className="relative rounded-2xl overflow-hidden bg-stone-900 h-44 sm:h-52">
        <img
          src={citrusWaterImage}
          onError={(e) => {
            // Fallback to static public folder copy
            e.currentTarget.src = '/images/refreshing_citrus_water.jpg';
          }}
          alt="Copo com água com gás, gelo e fatias de limão e hortelã na praia"
          className="w-full h-full object-cover opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-4 sm:p-5">
          <p className="text-xs sm:text-sm font-semibold text-white drop-shadow">
            Água com gás, limão e gelo: frescor e hidratação sob o calor do verão.
          </p>
        </div>
      </div>

      {/* Golden Rule Blockquote */}
      <div className="p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-amber-950 space-y-2">
        <p className="text-xs uppercase tracking-wider font-bold text-amber-800">Regra de ouro de revezamento</p>
        <blockquote className="text-base sm:text-lg font-bold font-display leading-snug">
          “Para cada bebida alcoólica, intercale uma bebida sem álcool — por exemplo, um copo de água.”
        </blockquote>
        <p className="text-xs text-amber-900/80 pt-1">
          Beba devagar e faça pausas. A água ajuda a manter a hidratação e o bem-estar físico.
        </p>
      </div>

      {/* Interactive Hydration Companion (Hidro-Tracker) */}
      <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <Droplet className="w-4 h-4 text-sky-600" />
              <span>Hidro-Tracker Interativo (1:1)</span>
            </h4>
            <p className="text-xs text-stone-500">Toque para acompanhar sua alternância durante o evento</p>
          </div>
          {(alcoholDrinks > 0 || waterGlasses > 0) && (
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-stone-500 hover:text-stone-800 flex items-center gap-1 min-h-[36px]"
              title="Zerar contador"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Zerar</span>
            </button>
          )}
        </div>

        {/* Counter cards */}
        <div className="grid grid-cols-2 gap-3">
          {/* Alcohol drink counter */}
          <div className="p-4 bg-white rounded-2xl border border-stone-200 text-center space-y-2 shadow-xs">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-amber-800">
              <Wine className="w-4 h-4 text-amber-600" />
              <span>Doses/Drinks</span>
            </div>
            <div className="text-3xl font-extrabold font-display text-stone-900 tabular-nums">
              {alcoholDrinks}
            </div>
            <div className="flex justify-center gap-1.5 pt-1">
              <button
                onClick={() => setAlcoholDrinks(Math.max(0, alcoholDrinks - 1))}
                className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold flex items-center justify-center min-w-[36px] min-h-[36px]"
                aria-label="Diminuir drink"
              >
                -
              </button>
              <button
                onClick={() => setAlcoholDrinks(alcoholDrinks + 1)}
                className="px-3 h-8 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center justify-center min-h-[36px]"
              >
                + 1 Drink
              </button>
            </div>
          </div>

          {/* Water counter */}
          <div className="p-4 bg-white rounded-2xl border border-stone-200 text-center space-y-2 shadow-xs">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-sky-800">
              <GlassWater className="w-4 h-4 text-sky-600" />
              <span>Copos de Água</span>
            </div>
            <div className="text-3xl font-extrabold font-display text-stone-900 tabular-nums">
              {waterGlasses}
            </div>
            <div className="flex justify-center gap-1.5 pt-1">
              <button
                onClick={() => setWaterGlasses(Math.max(0, waterGlasses - 1))}
                className="w-8 h-8 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold flex items-center justify-center min-w-[36px] min-h-[36px]"
                aria-label="Diminuir água"
              >
                -
              </button>
              <button
                onClick={() => setWaterGlasses(waterGlasses + 1)}
                className="px-3 h-8 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center min-h-[36px]"
              >
                + 1 Água
              </button>
            </div>
          </div>
        </div>

        {/* Real-time ratio feedback */}
        {alcoholDrinks === 0 && waterGlasses === 0 && (
          <p className="text-xs text-center text-stone-500 py-1">
            Dica: Sempre que pedir uma cerveja ou drink, peça um copo de água junto!
          </p>
        )}

        {isBalanced && (
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 text-xs flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Excelente equilíbrio! Você está mantendo a hidratação em dia.</span>
          </div>
        )}

        {needsWater && (
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
            <Droplet className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Momento ideal para pedir um copo d'água e restaurar a proporção 1:1!</span>
          </div>
        )}
      </div>

      {/* Critical Medical Disclaimer Note */}
      <div className="p-4 rounded-2xl bg-stone-100 border border-stone-300 text-stone-800 space-y-2 text-xs leading-relaxed">
        <div className="flex items-center gap-2 font-bold text-stone-900">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Fato científico importante:</span>
        </div>
        <p>
          A água ajuda na hidratação, <strong>mas não acelera a eliminação do álcool pelo fígado e não anula os reflexos prejudicados</strong>. Nunca use a ingestão de água como justificativa para assumir o volante.
        </p>
        <p className="text-stone-600 pt-1 border-t border-stone-200">
          Se bebidas gaseificadas ou certos alimentos deixam você estufada, observe seu corpo: a sensação de inchaço pode decorrer do gás, sódio ou digestão, não necessariamente de retenção persistente.
        </p>
      </div>
    </section>
  );
};
