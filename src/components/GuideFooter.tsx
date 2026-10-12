import React from 'react';
import { ShieldCheck, BookOpen, ArrowUp } from 'lucide-react';

interface GuideFooterProps {
  onOpenDisclaimer: () => void;
}

export const GuideFooter: React.FC<GuideFooterProps> = ({ onOpenDisclaimer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-12 mb-20 md:mb-8 pt-8 border-t border-amber-200/80 text-stone-600 text-xs leading-relaxed space-y-4">
      {/* Official Health Notice & Brazilian Dietary Guidelines Note */}
      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 space-y-2">
        <div className="flex items-center gap-2 font-bold text-amber-950">
          <BookOpen className="w-4 h-4 text-amber-700" />
          <span>Nota Educativa & Guia Alimentar para a População Brasileira</span>
        </div>
        <p className="text-stone-700">
          Este material é educativo e geral; não substitui orientação individual de nutricionista ou profissional de saúde. O Guia Alimentar brasileiro recomenda fazer de alimentos <em>in natura</em> ou minimamente processados a base da alimentação e valorizar refeições com variedade, afeto e equilíbrio.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-[11px] text-stone-500">
        <p>
          Guia Anti-Jaca de Verão · Conteúdo educativo · Sem promessas milagrosas
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenDisclaimer}
            className="text-amber-800 hover:text-amber-950 font-semibold underline underline-offset-4 flex items-center gap-1 min-h-[36px]"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Rever Termo e Aviso Legal</span>
          </button>
          <button
            onClick={scrollToTop}
            className="text-stone-500 hover:text-stone-800 font-medium flex items-center gap-1 min-h-[36px]"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Topo</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
