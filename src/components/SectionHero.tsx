import React from 'react';
import { Sparkles, HeartHandshake, Compass, ArrowRight } from 'lucide-react';
import { TabKey } from '../types.ts';
import heroPicnicImage from '../assets/images/summer_picnic_table_1791841073959.jpg';

interface SectionHeroProps {
  onNavigate: (tab: TabKey) => void;
}

export const SectionHero: React.FC<SectionHeroProps> = ({ onNavigate }) => {
  return (
    <section className="space-y-6">
      {/* Hero Visual Card */}
      <div className="relative overflow-hidden rounded-3xl bg-stone-900 text-white shadow-xl">
        <img
          src={heroPicnicImage}
          onError={(e) => {
            // Fallback to static public folder copy
            e.currentTarget.src = '/images/summer_picnic_table.jpg';
          }}
          alt="Mesa de verão com amigos compartilhando refeição equilibrada"
          className="w-full h-56 sm:h-72 object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent flex flex-col justify-end p-5 sm:p-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 tracking-wide uppercase mb-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Verão sem neura</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display leading-tight text-white mb-2">
            GUIA ANTI-JACA DE VERÃO
          </h2>
          <p className="text-amber-100/90 text-sm sm:text-base font-medium max-w-xl leading-snug">
            Curta o fim de semana com mais equilíbrio — sem neura e sem culpa.
          </p>
        </div>
      </div>

      {/* Main Philosophy Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-100 shadow-sm space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold font-display text-stone-900 leading-snug">
              Churrasco, praia, sobremesa e happy hour também podem fazer parte da vida.
            </h3>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              A ideia não é controlar cada garfada: é aproveitar o momento e voltar à rotina normal depois.
            </p>
          </div>
        </div>

        <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200/60 flex items-center gap-2.5 text-xs sm:text-sm text-amber-900 font-medium">
          <Compass className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Um guia prático de escolhas — não uma dieta nem uma promessa de resultado.</span>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-1">
            <p className="text-xs font-bold text-amber-700">01. Consciência</p>
            <h4 className="text-sm font-bold text-stone-900">Sem piloto automático</h4>
            <p className="text-xs text-stone-600">Escolha o que realmente dá prazer em vez de comer só porque está na mesa.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-1">
            <p className="text-xs font-bold text-amber-700">02. Sem Compensações</p>
            <h4 className="text-sm font-bold text-stone-900">Adeus jejuns punitivos</h4>
            <p className="text-xs text-stone-600">Não precisa "pagar" pelo churrasco no treino nem passar fome na segunda-feira.</p>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-1">
            <p className="text-xs font-bold text-amber-700">03. Retorno Leve</p>
            <h4 className="text-sm font-bold text-stone-900">Volta à rotina habitual</h4>
            <p className="text-xs text-stone-600">Comida caseira, hidratação no seu ritmo e sono reparador sem dramas.</p>
          </div>
        </div>

        {/* Quick CTA */}
        <div className="pt-2">
          <button
            onClick={() => onNavigate('preevento')}
            className="w-full sm:w-auto px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-2xl transition-all shadow-md shadow-amber-600/15 flex items-center justify-center gap-2 min-h-[48px]"
          >
            <span>Ver Protocolo Pré-Evento</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
