import React from 'react';
import { Sunrise, Sun, Utensils, Footprints, Moon, CheckCircle, ShieldAlert } from 'lucide-react';

export const SectionMondayRoutine: React.FC = () => {
  const steps = [
    {
      time: 'Manhã',
      icon: Sunrise,
      title: 'Desperte com gentileza',
      desc: 'Retome seu café da manhã habitual ou faça a refeição matinal que costuma funcionar bem para você. Sem jejum forçado.',
    },
    {
      time: 'Ao longo do dia',
      icon: Sun,
      title: 'Hidratação contínua',
      desc: 'Beba água conforme a sede e mantenha suas refeições habituais nos horários normais do seu dia.',
    },
    {
      time: 'Nas refeições',
      icon: Utensils,
      title: 'Comida de verdade brasileira',
      desc: 'Escolha alimentos que façam parte da sua rotina, como arroz, feijão, ovos, carnes, legumes, verduras e frutas frescas.',
    },
    {
      time: 'Movimento',
      icon: Footprints,
      title: 'Atividade sem punição',
      desc: 'Se estiver a fim e se sentir disposta, faça uma caminhada agradável ou retome seu treino normal — sem tentar “pagar” calorias.',
    },
    {
      time: 'À noite',
      icon: Moon,
      title: 'Descanso e reparação',
      desc: 'Priorize uma boa noite de sono e volte aos horários de descanso que ajudam seu corpo e mente a se sentirem bem.',
    },
  ];

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-amber-700">Módulo 06</span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900 mt-1">
            6. Segunda-feira sem remorso: volte à rotina
          </h3>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-amber-100/70 text-amber-800 flex items-center justify-center shrink-0">
          <Sunrise className="w-5 h-5 text-amber-700" />
        </div>
      </div>

      {/* Main anti-punishment statement */}
      <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200/70 text-emerald-950 text-sm leading-relaxed space-y-2">
        <p className="font-bold text-emerald-900 text-sm sm:text-base">
          Depois de um fim de semana diferente, você não precisa fazer detox, jejum, treino punitivo ou cortar grupos alimentares.
        </p>
        <p className="text-stone-700 text-xs sm:text-sm">
          Um dia ou evento especial não exige castigo. Seu corpo possui órgãos eficientes (fígado e rins) que já fazem todo o trabalho biológico necessário.
        </p>
      </div>

      {/* Timeline Schedule */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
          Seu Roteiro Simples para a Segunda-feira
        </h4>
        <div className="space-y-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.time}
                className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-3.5 hover:border-amber-300 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-md">
                      {step.time}
                    </span>
                    <h5 className="text-sm font-bold text-stone-900">{step.title}</h5>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bloating scientific note */}
      <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-stone-700 text-xs sm:text-sm space-y-2 leading-relaxed">
        <div className="flex items-center gap-2 font-bold text-stone-900">
          <ShieldAlert className="w-4 h-4 text-stone-600" />
          <span>Sobre a sensação de inchaço:</span>
        </div>
        <p>
          Uma refeição mais salgada pode contribuir para uma sensação temporária de inchaço em algumas pessoas; isso <strong>não significa que seja necessário tomar diuréticos ou fazer uma restrição extrema</strong>. Se o inchaço for persistente ou vier acompanhado de outros sintomas, procure orientação profissional.
        </p>
      </div>

      {/* Philosophy Conclusion */}
      <div className="p-4 bg-stone-950 text-white rounded-2xl flex items-center gap-3">
        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
        <p className="text-sm sm:text-base font-bold font-display">
          Voltar ao cuidado é melhor do que tentar compensar.
        </p>
      </div>
    </section>
  );
};
