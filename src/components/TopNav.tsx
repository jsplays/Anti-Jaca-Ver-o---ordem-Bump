import React from 'react';
import { ShieldAlert, Share2, SunMedium } from 'lucide-react';
import { TabKey } from '../types.ts';

interface TopNavProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
  onOpenDisclaimer: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeTab,
  onSelectTab,
  onOpenDisclaimer,
}) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Guia Anti-Jaca de Verão',
          text: 'Curta o fim de semana com mais equilíbrio — sem neura e sem culpa!',
          url: window.location.href,
        });
      } catch {
        // User dismissed share dialog
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copiado para a área de transferência!');
      } catch {
        // clipboard unavailable
      }
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-amber-50/90 backdrop-blur-md border-b border-amber-200/60 px-4 sm:px-6 py-3 transition-all">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-sm">
            <SunMedium className="w-5 h-5 text-amber-50" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold font-display text-stone-900 tracking-tight leading-none">
              Anti-Jaca Verão
            </h1>
            <p className="text-[11px] text-stone-500 font-medium leading-tight">
              Sem neura · Sem culpa
            </p>
          </div>
        </div>

        {/* Desktop Quick Nav */}
        <nav className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-stone-600">
          <button
            onClick={() => onSelectTab('intro')}
            className={`px-3 py-1.5 rounded-lg transition-colors min-h-[36px] ${
              activeTab === 'intro' ? 'bg-amber-100/80 text-amber-900 font-bold' : 'hover:text-stone-900'
            }`}
          >
            Visão & 80/20
          </button>
          <button
            onClick={() => onSelectTab('preevento')}
            className={`px-3 py-1.5 rounded-lg transition-colors min-h-[36px] ${
              activeTab === 'preevento' ? 'bg-amber-100/80 text-amber-900 font-bold' : 'hover:text-stone-900'
            }`}
          >
            Pré-Evento
          </button>
          <button
            onClick={() => onSelectTab('churrasco')}
            className={`px-3 py-1.5 rounded-lg transition-colors min-h-[36px] ${
              activeTab === 'churrasco' ? 'bg-amber-100/80 text-amber-900 font-bold' : 'hover:text-stone-900'
            }`}
          >
            Churrasco & Praia
          </button>
          <button
            onClick={() => onSelectTab('bebidas')}
            className={`px-3 py-1.5 rounded-lg transition-colors min-h-[36px] ${
              activeTab === 'bebidas' ? 'bg-amber-100/80 text-amber-900 font-bold' : 'hover:text-stone-900'
            }`}
          >
            Drinks & Hidratação
          </button>
          <button
            onClick={() => onSelectTab('segunda')}
            className={`px-3 py-1.5 rounded-lg transition-colors min-h-[36px] ${
              activeTab === 'segunda' ? 'bg-amber-100/80 text-amber-900 font-bold' : 'hover:text-stone-900'
            }`}
          >
            Segunda-feira
          </button>
          <button
            onClick={() => onSelectTab('checklist')}
            className={`px-3 py-1.5 rounded-lg transition-colors min-h-[36px] ${
              activeTab === 'checklist' ? 'bg-amber-100/80 text-amber-900 font-bold' : 'hover:text-stone-900'
            }`}
          >
            Checklist
          </button>
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={onOpenDisclaimer}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-amber-800 bg-amber-100/70 hover:bg-amber-200/80 border border-amber-300/60 rounded-xl transition-colors min-h-[44px]"
            title="Ver Termo e Aviso Legal"
            aria-label="Aviso Legal do Guia"
          >
            <ShieldAlert className="w-4 h-4 text-amber-700" />
            <span className="hidden sm:inline">Aviso Legal</span>
          </button>

          <button
            onClick={handleShare}
            className="p-2.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Compartilhar guia"
            aria-label="Compartilhar guia"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
