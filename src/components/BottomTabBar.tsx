import React from 'react';
import { Sparkles, Utensils, Flame, GlassWater, CalendarDays, CheckSquare2 } from 'lucide-react';
import { TabKey } from '../types.ts';

interface BottomTabBarProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
  pendingChecklistCount?: number;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeTab,
  onSelectTab,
  pendingChecklistCount = 0,
}) => {
  const tabs = [
    { key: 'intro' as TabKey, label: 'Início', icon: Sparkles },
    { key: 'preevento' as TabKey, label: 'Prévia', icon: Utensils },
    { key: 'churrasco' as TabKey, label: 'Churrasco', icon: Flame },
    { key: 'bebidas' as TabKey, label: 'Drinks', icon: GlassWater },
    { key: 'segunda' as TabKey, label: 'Segunda', icon: CalendarDays },
    { key: 'checklist' as TabKey, label: 'Checklist', icon: CheckSquare2, badge: pendingChecklistCount },
  ];

  return (
    <nav
      aria-label="Navegação móvel"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-amber-200/60 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]"
    >
      <div className="grid grid-cols-6 items-center h-16 px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => {
                onSelectTab(tab.key);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`relative flex flex-col items-center justify-center py-1 transition-colors min-h-[48px] ${
                isActive ? 'text-amber-700' : 'text-stone-400 hover:text-stone-700'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'scale-110 stroke-[2.4]' : 'scale-100 stroke-[1.8]'
                  }`}
                />
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="absolute -top-1 -right-2 bg-amber-500 text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-1 truncate max-w-[52px] ${
                isActive ? 'font-bold text-amber-800' : 'font-medium'
              }`}>
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute bottom-1 w-4 h-0.5 bg-amber-600 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
