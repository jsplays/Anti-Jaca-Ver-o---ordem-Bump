import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckSquare, Square, ShieldCheck, X } from 'lucide-react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  canCloseWithoutConfirm?: boolean;
  onClose?: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({
  isOpen,
  onConfirm,
  canCloseWithoutConfirm = false,
  onClose,
}) => {
  const [hasAgreed, setHasAgreed] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-900/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] sm:max-h-[88vh] bg-white text-stone-900 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-amber-100">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white flex items-start justify-between gap-3 shrink-0">
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-white/20 rounded-2xl shrink-0 backdrop-blur-md">
              <AlertTriangle className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-bold text-amber-100">Termo de Esclarecimento</p>
              <h2 id="disclaimer-title" className="text-lg sm:text-xl font-bold font-display leading-tight">
                AVISO IMPORTANTE — LEIA ANTES DE UTILIZAR ESTE MATERIAL
              </h2>
            </div>
          </div>
          {canCloseWithoutConfirm && onClose && (
            <button
              onClick={onClose}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Fechar aviso legal"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Scrollable Legal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
          <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200/80 text-amber-950">
            <p>
              Este guia é um <strong>produto exclusivamente educativo e informativo</strong>. Seu conteúdo foi elaborado para compartilhar orientações gerais sobre escolhas alimentares, hidratação e organização da rotina em eventos sociais. Ele <strong>não é uma dieta, prescrição, consulta ou acompanhamento individualizado</strong> e não substitui a avaliação ou as recomendações de nutricionista, médico ou outro profissional de saúde habilitado.
            </p>
          </div>

          <p>
            As informações deste material não levam em consideração seu histórico de saúde, exames, necessidades nutricionais, alergias, restrições alimentares, uso de medicamentos, objetivos pessoais ou outras características individuais. Por isso, uma recomendação geral pode não ser adequada para todas as pessoas. Se você tem uma condição de saúde, está grávida ou amamentando, usa medicamentos, possui necessidades alimentares específicas ou tem dúvidas sobre o que é apropriado para você, procure orientação de um profissional de saúde.
          </p>

          <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 text-stone-800">
            <p>
              <strong>Não há promessa ou garantia de resultado.</strong> Este guia não garante emagrecimento, manutenção de peso, prevenção de ganho de gordura, eliminação de inchaço ou retenção de líquidos, melhora da saúde ou qualquer resultado específico. As respostas variam de pessoa para pessoa e podem depender de diversos fatores, incluindo hábitos, rotina, condições individuais e acompanhamento profissional.
            </p>
          </div>

          <p>
            As sugestões apresentadas não devem ser usadas para justificar jejum, restrição alimentar extrema, uso de diuréticos, “detox”, compensações com exercício ou outras práticas que possam prejudicar sua saúde. Se alguma orientação causar desconforto ou não fizer sentido para sua realidade, não a siga sem buscar orientação profissional.
          </p>

          <div className="p-3.5 bg-red-50/70 rounded-2xl border border-red-200 text-red-950">
            <p>
              O conteúdo sobre bebidas alcoólicas é apenas informativo e <strong>não recomenda nem incentiva o consumo de álcool</strong>. Água, comida, café ou qualquer outra estratégia não anulam os efeitos do álcool nem tornam seguro dirigir após beber. Se beber, não dirija. Pessoas grávidas ou que possam estar grávidas, que estejam usando medicamentos que interagem com álcool ou que tenham orientação médica para evitá-lo não devem consumir bebidas alcoólicas.
            </p>
          </div>

          <p>
            Ao utilizar este material, você reconhece que ele oferece informações gerais para fins educativos e que suas decisões pessoais devem considerar suas necessidades e, quando necessário, a orientação de um profissional qualificado.
          </p>
        </div>

        {/* Checkbox Agreement & Action */}
        <div className="p-5 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-col gap-4 shrink-0">
          <label className="flex items-start gap-3 cursor-pointer select-none group p-2 rounded-xl hover:bg-stone-100 transition-colors">
            <input
              type="checkbox"
              className="sr-only"
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(e.target.checked)}
            />
            <div className="mt-0.5 text-amber-600 group-hover:scale-105 transition-transform shrink-0">
              {hasAgreed ? (
                <CheckSquare className="w-5 h-5 fill-amber-600 text-white" />
              ) : (
                <Square className="w-5 h-5 text-stone-400 group-hover:text-stone-600" />
              )}
            </div>
            <span className="text-xs sm:text-sm font-medium text-stone-800 leading-snug">
              Li e compreendi este aviso. Estou ciente de que este é um produto educativo, que não substitui orientação profissional e que não há promessa ou garantia de resultados.
            </span>
          </label>

          <button
            onClick={() => {
              if (hasAgreed) {
                onConfirm();
              }
            }}
            disabled={!hasAgreed}
            className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] min-h-[48px] ${
              hasAgreed
                ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20 cursor-pointer'
                : 'bg-stone-200 text-stone-400 cursor-not-allowed shadow-none'
            }`}
          >
            <ShieldCheck className="w-5 h-5" />
            <span>Acessar o Guia Anti-Jaca</span>
          </button>
        </div>
      </div>
    </div>
  );
};
