/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { DisclaimerModal } from './components/DisclaimerModal.tsx';
import { TopNav } from './components/TopNav.tsx';
import { BottomTabBar } from './components/BottomTabBar.tsx';
import { SectionHero } from './components/SectionHero.tsx';
import { SectionRule8020 } from './components/SectionRule8020.tsx';
import { SectionPreEvent } from './components/SectionPreEvent.tsx';
import { SectionBarbecueBeach } from './components/SectionBarbecueBeach.tsx';
import { SectionSmartDrinks } from './components/SectionSmartDrinks.tsx';
import { SectionHydrationTracker } from './components/SectionHydrationTracker.tsx';
import { SectionMondayRoutine } from './components/SectionMondayRoutine.tsx';
import { SectionChecklist } from './components/SectionChecklist.tsx';
import { GuideFooter } from './components/GuideFooter.tsx';
import { TabKey } from './types.ts';
import { Layers, AlignLeft } from 'lucide-react';

export default function App() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState<boolean>(false);
  const [hasAgreedInitial, setHasAgreedInitial] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabKey>('intro');
  const [viewMode, setViewMode] = useState<'modules' | 'full'>('modules');
  const [pendingChecklistCount, setPendingChecklistCount] = useState<number>(0);

  // Check localStorage for disclaimer acceptance
  useEffect(() => {
    const agreed = localStorage.getItem('guia_antijaca_disclaimer_accepted');
    if (agreed === 'true') {
      setHasAgreedInitial(true);
    } else {
      // User must accept first
      setIsDisclaimerOpen(true);
    }
  }, []);

  // Calculate pending checklist items for mobile badge
  useEffect(() => {
    const updateCount = () => {
      try {
        const saved = localStorage.getItem('antijaca_checklist_state');
        const checked = saved ? JSON.parse(saved) : {};
        const total = 12; // 12 items in total
        const completed = Object.values(checked).filter(Boolean).length;
        setPendingChecklistCount(Math.max(0, total - completed));
      } catch {
        setPendingChecklistCount(0);
      }
    };

    updateCount();
    window.addEventListener('storage', updateCount);
    const interval = setInterval(updateCount, 1500);
    return () => {
      window.removeEventListener('storage', updateCount);
      clearInterval(interval);
    };
  }, []);

  const handleConfirmDisclaimer = () => {
    localStorage.setItem('guia_antijaca_disclaimer_accepted', 'true');
    setHasAgreedInitial(true);
    setIsDisclaimerOpen(false);
  };

  const handleOpenDisclaimerManual = () => {
    setIsDisclaimerOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-100/60 text-stone-900 flex flex-col font-sans">
      {/* Mandatory Pop-up Legal Disclaimer */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onConfirm={handleConfirmDisclaimer}
        canCloseWithoutConfirm={hasAgreedInitial}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      {/* Top Application Bar */}
      <TopNav
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setViewMode('modules');
        }}
        onOpenDisclaimer={handleOpenDisclaimerManual}
      />

      {/* Main Container - Mobile ergonomics & Tablet/Desktop centering */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 pt-4 pb-12">
        {/* View Mode Switcher */}
        <div className="flex items-center justify-between mb-5 px-1">
          <p className="text-xs text-stone-500 font-semibold">
            {viewMode === 'modules' ? 'Navegação por Módulo' : 'Leitura Contínua Completa'}
          </p>
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-xl">
            <button
              onClick={() => setViewMode('modules')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all min-h-[36px] ${
                viewMode === 'modules'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Módulos</span>
            </button>
            <button
              onClick={() => setViewMode('full')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all min-h-[36px] ${
                viewMode === 'full'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <AlignLeft className="w-3.5 h-3.5" />
              <span>Guia Completo</span>
            </button>
          </div>
        </div>

        {/* Content View */}
        {viewMode === 'modules' ? (
          <div className="space-y-6 animate-in fade-in duration-150">
            {activeTab === 'intro' && (
              <>
                <SectionHero onNavigate={(tab) => setActiveTab(tab)} />
                <SectionRule8020 />
              </>
            )}

            {activeTab === 'preevento' && (
              <SectionPreEvent />
            )}

            {activeTab === 'churrasco' && (
              <SectionBarbecueBeach />
            )}

            {activeTab === 'bebidas' && (
              <>
                <SectionSmartDrinks />
                <SectionHydrationTracker />
              </>
            )}

            {activeTab === 'segunda' && (
              <SectionMondayRoutine />
            )}

            {activeTab === 'checklist' && (
              <SectionChecklist />
            )}
          </div>
        ) : (
          /* Continuous Reading Mode (All Sections sequentially) */
          <div className="space-y-8 animate-in fade-in duration-150">
            <SectionHero onNavigate={(tab) => {
              setActiveTab(tab);
              setViewMode('modules');
            }} />
            <SectionRule8020 />
            <SectionPreEvent />
            <SectionBarbecueBeach />
            <SectionSmartDrinks />
            <SectionHydrationTracker />
            <SectionMondayRoutine />
            <SectionChecklist />
          </div>
        )}

        {/* Footer */}
        <GuideFooter onOpenDisclaimer={handleOpenDisclaimerManual} />
      </main>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <BottomTabBar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setViewMode('modules');
        }}
        pendingChecklistCount={pendingChecklistCount}
      />
    </div>
  );
}
