import React, { useState } from 'react';
import { ShieldCheck, Droplet, UtensilsCrossed, Car, AlertCircle, Sparkles } from 'lucide-react';

export const SectionPreEvent: React.FC = () => {
  const [selectedMealExample, setSelectedMealExample] = useState<'almoco' | 'lanche'>('almoco');

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-amber-700">Módulo 02</span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900 mt-1">
            2. Protocolo pré-evento: prepare-se sem chegar com fome
          </h3>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-amber-100/70 text-amber-800 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
      </div>

      <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200/60 text-amber-950 text-sm leading-relaxed">
        Não é preciso “preparar o estômago” nem passar o dia economizando comida para o churrasco. Chegar com muita fome pode tornar mais difícil perceber a saciedade. Faça o básico:
      </div>

      {/* 3 Steps */}
      <div className="space-y-4">
        {/* Step 1 */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center">1</span>
            <h4 className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-1.5">
              <Droplet className="w-4 h-4 text-sky-600" />
              <span>Algumas horas antes, beba água como de costume</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
            Não precisa tomar litros de uma vez nem seguir uma quantidade rígida. Tenha água por perto e ajuste ao calor, à sede e à sua rotina do dia.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center">2</span>
            <h4 className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-1.5">
              <UtensilsCrossed className="w-4 h-4 text-emerald-600" />
              <span>Faça uma refeição normal antes do evento, se estiver com fome</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
            Uma refeição com proteína, carboidrato e algum vegetal ou fruta pode ajudar você a chegar mais tranquila.
          </p>

          {/* Interactive Examples selector */}
          <div className="pl-8 pt-1 space-y-2.5">
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedMealExample('almoco')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all min-h-[36px] ${
                  selectedMealExample === 'almoco'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900'
                }`}
              >
                Ideia 1: Prato Completo
              </button>
              <button
                onClick={() => setSelectedMealExample('lanche')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all min-h-[36px] ${
                  selectedMealExample === 'lanche'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900'
                }`}
              >
                Ideia 2: Lanche Prático
              </button>
            </div>

            <div className="p-3.5 bg-white rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700">
              {selectedMealExample === 'almoco' ? (
                <div className="space-y-1">
                  <p className="font-bold text-stone-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Arroz, feijão, frango grelhado e salada fresca</span>
                  </p>
                  <p className="text-stone-500 text-xs">
                    Garante saciedade duradoura, energia e micronutrientes sem sobrecarregar a digestão antes do evento.
                  </p>
                </div>
              ) : (
                <div className="space-y-1">
                  <p className="font-bold text-stone-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Iogurte natural com fruta fresca picada e aveia</span>
                  </p>
                  <p className="text-stone-500 text-xs">
                    Rápido de preparar, fonte de proteína e fibras que estabiliza a glicemia e diminui a impulsividade ao chegar.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center">3</span>
            <h4 className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-1.5">
              <Car className="w-4 h-4 text-purple-600" />
              <span>Decida como quer aproveitar</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
            Pense no que você está com vontade de comer ou beber e escolha com intenção. Se for consumir álcool, planeje também como vai voltar para casa — <strong>sem dirigir (vá de aplicativo ou combine carona com antecedência)</strong>.
          </p>
        </div>
      </div>

      {/* Critical Reminder Alert */}
      <div className="p-4 bg-orange-50 border border-orange-200/80 rounded-2xl flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <p className="text-xs sm:text-sm font-bold text-orange-950">Lembrete de ouro:</p>
          <p className="text-xs sm:text-sm text-orange-900">
            <strong>Não pule refeições para “guardar calorias”.</strong> Você não precisa chegar ao evento faminta para aproveitar.
          </p>
        </div>
      </div>
    </section>
  );
};
