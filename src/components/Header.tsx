import React from 'react';

interface HeaderProps {
  currentTab: 'roadmap' | 'domains' | 'exam' | 'vault' | 'certificate';
  setCurrentTab: (tab: 'roadmap' | 'domains' | 'exam' | 'vault' | 'certificate') => void;
  completedCount: number;
  openTimerModal: () => void;
  openTodayModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  completedCount,
  openTimerModal,
  openTodayModal
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Wordmark */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-neutral-950 font-bold shadow-sm">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <button 
            onClick={() => setCurrentTab('roadmap')}
            className="text-left group cursor-pointer focus:outline-none"
          >
            <span className="block text-base font-semibold tracking-tight text-neutral-100 group-hover:text-amber-400 transition-colors">
              Claude Certification Roadmap
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => setCurrentTab('roadmap')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
              currentTab === 'roadmap'
                ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                : 'text-neutral-300 hover:text-neutral-100'
            }`}
          >
            90-Day Roadmap
          </button>
          <button
            onClick={() => setCurrentTab('domains')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
              currentTab === 'domains'
                ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                : 'text-neutral-300 hover:text-neutral-100'
            }`}
          >
            7 Syllabus Domains
          </button>
          <button
            onClick={() => setCurrentTab('exam')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
              currentTab === 'exam'
                ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                : 'text-neutral-300 hover:text-neutral-100'
            }`}
          >
            Practice Exam
          </button>
          <button
            onClick={() => setCurrentTab('vault')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
              currentTab === 'vault'
                ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                : 'text-neutral-300 hover:text-neutral-100'
            }`}
          >
            Knowledge Vault
          </button>
          {/* <button
            onClick={() => setCurrentTab('certificate')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 ${
              currentTab === 'certificate'
                ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                : 'text-neutral-300 hover:text-neutral-100'
            }`}
          >
            Certificate & Badges
          </button> */}

        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={openTimerModal}
            className="flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:border-neutral-600 hover:bg-neutral-800 transition-colors whitespace-nowrap cursor-pointer"
            title="Open 60-Minute Focus Study Timer"
          >
            <svg className="h-4 w-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span className="hidden sm:inline">60-Min Timer</span>
          </button>
          <button
            onClick={openTodayModal}
            className="flex items-center gap-2 rounded-lg bg-amber-500 px-3.5 py-1.5 text-xs font-semibold text-neutral-950 hover:bg-amber-400 transition-colors whitespace-nowrap cursor-pointer shadow-sm"
          >
            <span>Jump to Day {Math.min(90, completedCount + 1)}</span>
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile nav bar */}
      <div className="flex md:hidden items-center justify-around border-t border-neutral-800 px-2 py-2 text-xs font-medium overflow-x-auto">
        <button
          onClick={() => setCurrentTab('roadmap')}
          className={`px-2 py-1 whitespace-nowrap ${currentTab === 'roadmap' ? 'text-amber-400 font-semibold' : 'text-neutral-400'}`}
        >
          Roadmap
        </button>
        <button
          onClick={() => setCurrentTab('domains')}
          className={`px-2 py-1 whitespace-nowrap ${currentTab === 'domains' ? 'text-amber-400 font-semibold' : 'text-neutral-400'}`}
        >
          7 Domains
        </button>
        <button
          onClick={() => setCurrentTab('exam')}
          className={`px-2 py-1 whitespace-nowrap ${currentTab === 'exam' ? 'text-amber-400 font-semibold' : 'text-neutral-400'}`}
        >
          Practice Exam
        </button>
        <button
          onClick={() => setCurrentTab('vault')}
          className={`px-2 py-1 whitespace-nowrap ${currentTab === 'vault' ? 'text-amber-400 font-semibold' : 'text-neutral-400'}`}
        >
          Cheat Sheets
        </button>
        {/* <button
          onClick={() => setCurrentTab('certificate')}
          className={`px-2 py-1 whitespace-nowrap ${currentTab === 'certificate' ? 'text-amber-400 font-semibold' : 'text-neutral-400'}`}
        >
          Badges
        </button> */}
      </div>
    </header>
  );
};
