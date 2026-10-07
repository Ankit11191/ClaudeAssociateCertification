import React, { useState, useMemo } from 'react';
import { ALL_CURRICULUM_DAYS } from '../data/curriculumData';
import { DOMAINS } from '../data/domains';
import { CurriculumDay, DomainId } from '../types/curriculum';

interface RoadmapTimelineProps {
  completedDays: number[];
  completedTaskIds: string[];
  bookmarkedDays: number[];
  toggleDayComplete: (day: number) => void;
  toggleBookmark: (day: number) => void;
  openDayModal: (dayNum: number) => void;
}

export const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({
  completedDays,
  completedTaskIds,
  bookmarkedDays,
  toggleDayComplete,
  toggleBookmark,
  openDayModal
}) => {
  const [selectedMonth, setSelectedMonth] = useState<1 | 2 | 3>(1);
  const [selectedDomain, setSelectedDomain] = useState<DomainId | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'incomplete' | 'completed' | 'milestones' | 'bookmarked'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredDays = useMemo(() => {
    return ALL_CURRICULUM_DAYS.filter(day => {
      // Month match (only if not searching across all or if user wants specific month)
      if (!searchQuery && day.month !== selectedMonth) {
        return false;
      }

      // Domain match
      if (selectedDomain !== 'all' && day.domainId !== selectedDomain) {
        return false;
      }

      // Status match
      const isCompleted = completedDays.includes(day.day);
      const isBookmarked = bookmarkedDays.includes(day.day);
      if (statusFilter === 'completed' && !isCompleted) return false;
      if (statusFilter === 'incomplete' && isCompleted) return false;
      if (statusFilter === 'milestones' && !day.isMilestone) return false;
      if (statusFilter === 'bookmarked' && !isBookmarked) return false;

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = day.title.toLowerCase().includes(query);
        const matchesSummary = day.shortSummary.toLowerCase().includes(query);
        const matchesConcept = day.conceptGuide.toLowerCase().includes(query);
        const matchesTasks = day.tasks.some(t => t.text.toLowerCase().includes(query));
        const matchesDomain = DOMAINS[day.domainId].name.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSummary && !matchesConcept && !matchesTasks && !matchesDomain) {
          return false;
        }
      }

      return true;
    });
  }, [selectedMonth, selectedDomain, statusFilter, searchQuery, completedDays, bookmarkedDays]);

  // Counts for tabs
  const month1Completed = ALL_CURRICULUM_DAYS.filter(d => d.month === 1 && completedDays.includes(d.day)).length;
  const month2Completed = ALL_CURRICULUM_DAYS.filter(d => d.month === 2 && completedDays.includes(d.day)).length;
  const month3Completed = ALL_CURRICULUM_DAYS.filter(d => d.month === 3 && completedDays.includes(d.day)).length;

  return (
    <section>
      
      {/* Month Navigation & Controls Header */}
      <div className="mb-6 flex flex-col gap-4">
        
        {/* Month Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => { setSelectedMonth(1); setSearchQuery(''); }}
            className={`flex items-center justify-between rounded-xl border p-4 text-left transition-all cursor-pointer ${
              selectedMonth === 1 && !searchQuery
                ? 'border-amber-500/60 bg-neutral-900 shadow-sm ring-1 ring-amber-500/30'
                : 'border-neutral-800 bg-neutral-950/60 hover:border-neutral-700'
            }`}
          >
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                Phase 1 · Days 1–30
              </span>
              <h3 className="text-sm font-bold text-neutral-100">
                Core Foundations & Prompting
              </h3>
              <p className="mt-0.5 text-xs text-neutral-400">
                Models, XML tags, CoT reasoning & Artifacts
              </p>
            </div>
            <div className="text-right">
              <span className="font-mono text-sm font-semibold text-neutral-200 tabular-nums">
                {month1Completed}/30
              </span>
              <span className="block text-[10px] text-neutral-500">Days</span>
            </div>
          </button>

          <button
            onClick={() => { setSelectedMonth(2); setSearchQuery(''); }}
            className={`flex items-center justify-between rounded-xl border p-4 text-left transition-all cursor-pointer ${
              selectedMonth === 2 && !searchQuery
                ? 'border-amber-500/60 bg-neutral-900 shadow-sm ring-1 ring-amber-500/30'
                : 'border-neutral-800 bg-neutral-950/60 hover:border-neutral-700'
            }`}
          >
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                Phase 2 · Days 31–60
              </span>
              <h3 className="text-sm font-bold text-neutral-100">
                Projects, Workflows & Governance
              </h3>
              <p className="mt-0.5 text-xs text-neutral-400">
                Project Knowledge, HITL, PII & Constitutional AI
              </p>
            </div>
            <div className="text-right">
              <span className="font-mono text-sm font-semibold text-neutral-200 tabular-nums">
                {month2Completed}/30
              </span>
              <span className="block text-[10px] text-neutral-500">Days</span>
            </div>
          </button>

          <button
            onClick={() => { setSelectedMonth(3); setSearchQuery(''); }}
            className={`flex items-center justify-between rounded-xl border p-4 text-left transition-all cursor-pointer ${
              selectedMonth === 3 && !searchQuery
                ? 'border-amber-500/60 bg-neutral-900 shadow-sm ring-1 ring-amber-500/30'
                : 'border-neutral-800 bg-neutral-950/60 hover:border-neutral-700'
            }`}
          >
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                Phase 3 · Days 61–90
              </span>
              <h3 className="text-sm font-bold text-neutral-100">
                Evaluation & Exam Readiness
              </h3>
              <p className="mt-0.5 text-xs text-neutral-400">
                Hallucinations (21%), Troubleshooting & 60-Q Mocks
              </p>
            </div>
            <div className="text-right">
              <span className="font-mono text-sm font-semibold text-neutral-200 tabular-nums">
                {month3Completed}/30
              </span>
              <span className="block text-[10px] text-neutral-500">Days</span>
            </div>
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 rounded-lg border border-neutral-800 bg-neutral-950/80 p-3">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <svg className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search all 90 days (e.g., XML, Haiku, PII, Hallucination, Mock)..."
              className="w-full rounded-md border border-neutral-800 bg-neutral-900 py-1.5 pl-9 pr-8 text-xs text-neutral-200 placeholder-neutral-500 focus:border-amber-500 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-xs text-neutral-500 hover:text-neutral-300"
              >
                ✕
              </button>
            )}
          </div>

          {/* Domain Dropdown Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value as DomainId | 'all')}
              className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs text-neutral-200 focus:border-amber-500 focus:outline-none cursor-pointer"
            >
              <option value="all">All 7 Domains</option>
              {Object.values(DOMAINS).map(d => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.weight}%)
                </option>
              ))}
            </select>

            {/* Status Segmented Control */}
            <div className="flex items-center rounded-md border border-neutral-800 bg-neutral-900 p-0.5 text-xs">
              <button
                onClick={() => setStatusFilter('all')}
                className={`rounded px-2.5 py-1 text-xs transition-colors cursor-pointer ${
                  statusFilter === 'all' ? 'bg-neutral-800 text-neutral-100 font-medium' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter('incomplete')}
                className={`rounded px-2.5 py-1 text-xs transition-colors cursor-pointer ${
                  statusFilter === 'incomplete' ? 'bg-neutral-800 text-neutral-100 font-medium' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                To-Do
              </button>
              <button
                onClick={() => setStatusFilter('completed')}
                className={`rounded px-2.5 py-1 text-xs transition-colors cursor-pointer ${
                  statusFilter === 'completed' ? 'bg-neutral-800 text-neutral-100 font-medium' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Done
              </button>
              <button
                onClick={() => setStatusFilter('milestones')}
                className={`rounded px-2.5 py-1 text-xs transition-colors cursor-pointer ${
                  statusFilter === 'milestones' ? 'bg-neutral-800 text-neutral-100 font-medium' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Milestones
              </button>
              <button
                onClick={() => setStatusFilter('bookmarked')}
                className={`rounded px-2.5 py-1 text-xs transition-colors cursor-pointer ${
                  statusFilter === 'bookmarked' ? 'bg-neutral-800 text-neutral-100 font-medium' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Saved
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Search Result Banner if active */}
      {searchQuery && (
        <div className="mb-4 flex items-center justify-between text-xs text-neutral-400">
          <span>Found <strong className="text-neutral-200 font-mono">{filteredDays.length}</strong> days matching "{searchQuery}"</span>
          <button
            onClick={() => setSearchQuery('')}
            className="text-amber-400 hover:underline cursor-pointer"
          >
            Clear search filter
          </button>
        </div>
      )}

      {/* Grid of Daily Roadmap Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDays.map(day => {
          const isCompleted = completedDays.includes(day.day);
          const isBookmarked = bookmarkedDays.includes(day.day);
          const domain = DOMAINS[day.domainId];
          const completedTasksForDay = day.tasks.filter(t => completedTaskIds.includes(t.id)).length;
          const totalTasksForDay = day.tasks.length;

          return (
            <div
              key={day.day}
              className={`group relative flex flex-col justify-between rounded-xl border p-4 transition-all ${
                isCompleted
                  ? 'border-emerald-500/30 bg-neutral-950/80 shadow-sm'
                  : day.isMilestone
                  ? 'border-amber-500/40 bg-neutral-900/90 shadow-md ring-1 ring-amber-500/20'
                  : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900/80'
              }`}
            >
              <div>
                
                {/* Header row: Day Number, Domain Tag, Actions */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-md font-mono text-xs font-bold ${
                      isCompleted ? 'bg-emerald-500 text-neutral-950' : 'bg-neutral-800 text-neutral-200'
                    }`}>
                      {day.day}
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      Week {day.week}
                    </span>
                    <span className="text-neutral-600" aria-hidden="true">·</span>
                    <span className={`text-[11px] font-medium ${domain.textColor}`}>
                      {domain.name.split('&')[0].trim()}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(day.day);
                      }}
                      className={`p-1 text-xs transition-colors cursor-pointer ${
                        isBookmarked ? 'text-amber-400' : 'text-neutral-600 hover:text-neutral-400'
                      }`}
                      title={isBookmarked ? 'Remove bookmark' : 'Bookmark this day'}
                    >
                      <svg className="h-4 w-4" fill={isBookmarked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDayComplete(day.day);
                      }}
                      className={`flex h-6 w-6 items-center justify-center rounded-md border text-xs transition-all cursor-pointer ${
                        isCompleted
                          ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400'
                          : 'border-neutral-700 bg-neutral-800 text-neutral-400 hover:border-emerald-500 hover:text-emerald-400'
                      }`}
                      title={isCompleted ? 'Mark incomplete' : 'Mark day as completed (1 hour logged)'}
                    >
                      ✓
                    </button>
                  </div>
                </div>

                {/* Milestone Banner if applicable */}
                {day.isMilestone && (
                  <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-amber-400">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span>{day.milestoneTitle}</span>
                  </div>
                )}

                {/* Day Title & Summary */}
                <h4 
                  onClick={() => openDayModal(day.day)}
                  className="text-sm font-semibold text-neutral-100 group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-1"
                >
                  {day.title}
                </h4>
                <p className="mt-1 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                  {day.shortSummary}
                </p>

              </div>

              {/* Card Footer: 1-Hour breakdown, Checklist badge, Open detail button */}
              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                
                {/* 1-Hour Time allocation */}
                <div className="text-[11px] text-neutral-400">
                  <span className="font-mono tabular-nums text-neutral-300">{day.timeAllocation.conceptMinutes}m</span> Concept
                  <span className="text-neutral-600 mx-1">·</span>
                  <span className="font-mono tabular-nums text-neutral-300">{day.timeAllocation.handsOnMinutes}m</span> Lab
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-mono tabular-nums ${completedTasksForDay === totalTasksForDay && totalTasksForDay > 0 ? 'text-emerald-400' : 'text-neutral-500'}`}>
                    {completedTasksForDay}/{totalTasksForDay} tasks
                  </span>
                  <button
                    onClick={() => openDayModal(day.day)}
                    className="rounded bg-neutral-800 px-2.5 py-1 text-[11px] font-medium text-neutral-200 hover:bg-neutral-700 transition-colors cursor-pointer"
                  >
                    View
                  </button>
                </div>

              </div>

            </div>
          );
        })}
      </div>

      {filteredDays.length === 0 && (
        <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-12 text-center">
          <p className="text-sm text-neutral-400">No days found matching your filter criteria.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedDomain('all'); setStatusFilter('all'); }}
            className="mt-2 text-xs font-medium text-amber-400 hover:underline cursor-pointer"
          >
            Reset all filters
          </button>
        </div>
      )}

    </section>
  );
};
