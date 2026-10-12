import React, { useState, useEffect } from 'react';
import { CheckSquare2, RotateCcw, Sparkles, Check, Heart, Shield } from 'lucide-react';

interface ChecklistItemData {
  id: string;
  category: 'antes' | 'durante' | 'segunda';
  text: string;
}

const CHECKLIST_ITEMS: ChecklistItemData[] = [
  // Antes de sair
  { id: 'antes_1', category: 'antes', text: 'Não pule refeições para “guardar espaço”.' },
  { id: 'antes_2', category: 'antes', text: 'Beba água como de costume.' },
  { id: 'antes_3', category: 'antes', text: 'Pense no que você realmente está com vontade de aproveitar.' },
  { id: 'antes_4', category: 'antes', text: 'Se for beber, planeje uma volta segura para casa (carona ou aplicativo).' },

  // Durante o evento
  { id: 'durante_1', category: 'durante', text: 'Coma com calma e escolha o que gosta.' },
  { id: 'durante_2', category: 'durante', text: 'Intercale bebidas alcoólicas com opções sem álcool, se decidir beber.' },
  { id: 'durante_3', category: 'durante', text: 'Lembre-se: água não corta o efeito do álcool nem libera você para dirigir.' },
  { id: 'durante_4', category: 'durante', text: 'Aproveite sem precisar provar tudo — ou justificar o que escolheu.' },

  // Na segunda-feira
  { id: 'segunda_1', category: 'segunda', text: 'Volte às refeições habituais.' },
  { id: 'segunda_2', category: 'segunda', text: 'Hidrate-se normalmente conforme sua sede.' },
  { id: 'segunda_3', category: 'segunda', text: 'Retome seus movimentos e horários sem punição.' },
  { id: 'segunda_4', category: 'segunda', text: 'Deixe o fim de semana no fim de semana: siga em frente.' },
];

export const SectionChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('antijaca_checklist_state');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('antijaca_checklist_state', JSON.stringify(checkedIds));
  }, [checkedIds]);

  const toggleItem = (id: string) => {
    setCheckedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleReset = () => {
    if (confirm('Deseja desmarcar todos os itens para um novo fim de semana?')) {
      setCheckedIds({});
    }
  };

  const totalCount = CHECKLIST_ITEMS.length;
  const completedCount = CHECKLIST_ITEMS.filter(item => !!checkedIds[item.id]).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const renderCategory = (category: 'antes' | 'durante' | 'segunda', title: string, subtitle: string) => {
    const items = CHECKLIST_ITEMS.filter(i => i.category === category);
    const categoryCompleted = items.filter(i => !!checkedIds[i.id]).length;

    return (
      <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-stone-900">{title}</h4>
            <p className="text-[11px] text-stone-500 font-medium">{subtitle}</p>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white border border-stone-200 text-stone-600">
            {categoryCompleted} de {items.length}
          </span>
        </div>

        <div className="space-y-2">
          {items.map((item) => {
            const isChecked = !!checkedIds[item.id];
            return (
              <label
                key={item.id}
                className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none min-h-[44px] ${
                  isChecked
                    ? 'bg-amber-50/70 border-amber-300/80 text-stone-900 shadow-xs'
                    : 'bg-white border-stone-200/80 text-stone-700 hover:border-amber-300'
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={() => toggleItem(item.id)}
                />
                <div className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                  isChecked ? 'bg-amber-600 text-white' : 'border border-stone-300 bg-white'
                }`}>
                  {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className={`text-xs sm:text-sm font-medium leading-relaxed ${
                  isChecked ? 'line-through text-stone-500' : 'text-stone-800'
                }`}>
                  {item.text}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-100 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-amber-700">Módulo 07</span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-stone-900 mt-1">
            7. Checklist de bolso
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
            Seu guia prático para salvar e consultar no celular durante o fim de semana.
          </p>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-amber-100/70 text-amber-800 flex items-center justify-center shrink-0">
          <CheckSquare2 className="w-5 h-5 text-amber-700" />
        </div>
      </div>

      {/* Progress Bar Card */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-300/50 space-y-2.5">
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-amber-950">
          <span>Progresso do Fim de Semana</span>
          <span className="tabular-nums font-mono">{completedCount} de {totalCount} concluídos ({progressPercent}%)</span>
        </div>
        <div className="w-full bg-stone-200/80 rounded-full h-3 overflow-hidden">
          <div
            className="bg-amber-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] text-amber-900/80 flex items-center gap-1 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Salvo automaticamente no seu aparelho</span>
          </span>
          {completedCount > 0 && (
            <button
              onClick={handleReset}
              className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 font-medium min-h-[36px]"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Limpar</span>
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {renderCategory('antes', 'Antes de sair', 'Preparação sem fome excessiva')}
        {renderCategory('durante', 'Durante o evento', 'Presença, moderação e segurança')}
        {renderCategory('segunda', 'Na segunda-feira', 'Retomada natural da rotina')}
      </div>

      {/* Inspirational Farewell */}
      <div className="p-5 rounded-2xl bg-stone-900 text-white space-y-2 text-center">
        <div className="flex items-center justify-center gap-1.5 text-amber-400">
          <Heart className="w-5 h-5 fill-amber-400" />
        </div>
        <h4 className="text-base sm:text-lg font-bold font-display text-white">
          Curta o momento. Cuide de você. Sem culpa e sem promessas milagrosas.
        </h4>
        <p className="text-xs text-stone-400 max-w-md mx-auto">
          O equilíbrio não é ausência de celebração: é a tranquilidade de saber viver e recomeçar a qualquer momento.
        </p>
      </div>
    </section>
  );
};
