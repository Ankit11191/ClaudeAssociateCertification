import React, { useState, useEffect } from 'react';
import { CurriculumDay } from '../types/curriculum';
import { DOMAINS } from '../data/domains';

interface DayDetailModalProps {
  day: CurriculumDay | null;
  isOpen: boolean;
  onClose: () => void;
  isCompleted: boolean;
  completedTaskIds: string[];
  userNote: string;
  onToggleComplete: (dayNum: number) => void;
  onToggleTask: (taskId: string, dayNum: number) => void;
  onSaveNote: (dayNum: number, note: string) => void;
  onOpenTimer: () => void;
  onNavigateDay: (dayNum: number) => void;
}

export const DayDetailModal: React.FC<DayDetailModalProps> = ({
  day,
  isOpen,
  onClose,
  isCompleted,
  completedTaskIds,
  userNote,
  onToggleComplete,
  onToggleTask,
  onSaveNote,
  onOpenTimer,
  onNavigateDay
}) => {
  const [localNote, setLocalNote] = useState(userNote);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string>('');

  useEffect(() => {
    setLocalNote(userNote);
  }, [userNote, day]);

  if (!isOpen || !day) return null;

  const domain = DOMAINS[day.domainId];

  const handleCopyPrompt = () => {
    if (day.handsOnExercise.promptTemplate) {
      navigator.clipboard.writeText(day.handsOnExercise.promptTemplate);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    }
  };

  const handleNoteBlur = () => {
    onSaveNote(day.day, localNote);
    setSaveStatus('Saved');
    setTimeout(() => setSaveStatus(''), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/80 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className={`flex h-8 w-8 items-center justify-center rounded-lg font-mono text-sm font-bold ${
              isCompleted ? 'bg-emerald-500 text-neutral-950' : 'bg-amber-500 text-neutral-950'
            }`}>
              {day.day}
            </span>
            <div>
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <span>Month {day.month}</span>
                <span className="text-neutral-600" aria-hidden="true">·</span>
                <span>Week {day.week}</span>
                <span className="text-neutral-600" aria-hidden="true">·</span>
                <span className={`font-medium ${domain.textColor}`}>
                  {domain.name} ({domain.weight}% weight)
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-neutral-100">
                {day.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* 1-Hour Schedule Visual Breakdown */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Daily 1-Hour Dedicated Study Plan (60 Minutes)
              </span>
              <button
                onClick={onOpenTimer}
                className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium cursor-pointer"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                Launch 60-Min Timer
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-2.5">
                <span className="font-mono text-base font-bold text-amber-400 tabular-nums">
                  {day.timeAllocation.conceptMinutes}m
                </span>
                <span className="block text-[11px] text-neutral-300 font-medium mt-0.5">Concept Mastery</span>
                <span className="block text-[10px] text-neutral-500">Theory & Principles</span>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-2.5">
                <span className="font-mono text-base font-bold text-sky-400 tabular-nums">
                  {day.timeAllocation.handsOnMinutes}m
                </span>
                <span className="block text-[11px] text-neutral-300 font-medium mt-0.5">Hands-On Lab</span>
                <span className="block text-[10px] text-neutral-500">Prompts & Practice</span>
              </div>
              <div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-2.5">
                <span className="font-mono text-base font-bold text-emerald-400 tabular-nums">
                  {day.timeAllocation.reviewMinutes}m
                </span>
                <span className="block text-[11px] text-neutral-300 font-medium mt-0.5">Self-Audit</span>
                <span className="block text-[10px] text-neutral-500">Checklist & Notes</span>
              </div>
            </div>
          </div>

          {/* Learning Objectives */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Key Learning Objectives
            </h3>
            <ul className="space-y-1.5 text-xs text-neutral-300">
              {day.learningObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">›</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mentor Concept Guide */}
          <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2 flex items-center gap-2">
              <svg className="h-4 w-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              Mentor Concept Guide
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed whitespace-pre-line">
              {day.conceptGuide}
            </p>
          </div>

          {/* Hands-on Exercise & Prompt Lab */}
          <div className="rounded-xl border border-sky-900/40 bg-sky-950/20 p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
                Hands-on Lab: {day.handsOnExercise.taskName}
              </h3>
              {day.handsOnExercise.promptTemplate && (
                <button
                  onClick={handleCopyPrompt}
                  className="rounded bg-sky-900/50 px-2.5 py-1 text-[11px] font-medium text-sky-200 hover:bg-sky-800/60 transition-colors cursor-pointer"
                >
                  {copiedPrompt ? '✓ Copied!' : 'Copy Prompt'}
                </button>
              )}
            </div>

            <p className="text-xs text-neutral-300 mb-3">
              {day.handsOnExercise.instructions}
            </p>

            {day.handsOnExercise.promptTemplate && (
              <div className="relative mb-3 rounded-lg border border-neutral-800 bg-neutral-950 p-3 font-mono text-xs text-neutral-200">
                <pre className="whitespace-pre-wrap break-words">{day.handsOnExercise.promptTemplate}</pre>
              </div>
            )}

            <div className="flex items-start gap-2 text-xs text-neutral-400 bg-neutral-950/40 p-2 rounded border border-neutral-900">
              <span className="font-semibold text-neutral-300 shrink-0">Expected Outcome:</span>
              <span>{day.handsOnExercise.expectedOutcome}</span>
            </div>
          </div>

          {/* Daily Checklist */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Daily Action Checklist ({day.tasks.filter(t => completedTaskIds.includes(t.id)).length}/{day.tasks.length} Completed)
            </h3>
            <div className="space-y-2">
              {day.tasks.map(task => {
                const isChecked = completedTaskIds.includes(task.id);
                return (
                  <label
                    key={task.id}
                    className={`flex items-start gap-3 rounded-lg border p-3 transition-colors cursor-pointer ${
                      isChecked
                        ? 'border-emerald-500/30 bg-emerald-950/20 text-neutral-200'
                        : 'border-neutral-800 bg-neutral-900/40 text-neutral-300 hover:border-neutral-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onToggleTask(task.id, day.day)}
                      className="mt-0.5 h-4 w-4 rounded border-neutral-700 text-amber-500 focus:ring-amber-500 cursor-pointer"
                    />
                    <div className="flex-1 text-xs">
                      <span className={isChecked ? 'line-through text-neutral-400' : ''}>
                        {task.text}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-neutral-500 tabular-nums shrink-0">
                      {task.durationMinutes} min
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Mentor Tip & Exam Trap Warnings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                Mentor Advice
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {day.mentorTip}
              </p>
            </div>

            <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 block mb-1">
                Exam Trap Warning
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                {day.examTrapWarning}
              </p>
            </div>
          </div>

          {/* Personal Study Notes */}
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                My Study Notes for Day {day.day}
              </span>
              {saveStatus && (
                <span className="text-xs text-emerald-400 font-medium">{saveStatus}</span>
              )}
            </div>
            <textarea
              value={localNote}
              onChange={(e) => setLocalNote(e.target.value)}
              onBlur={handleNoteBlur}
              placeholder="Record your takeaways, test observations, and questions to review later..."
              rows={3}
              className="w-full rounded-lg border border-neutral-800 bg-neutral-950 p-3 text-xs text-neutral-200 placeholder-neutral-500 focus:border-amber-500 focus:outline-none"
            />
          </div>

        </div>

        {/* Modal Fixed Footer Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800 bg-neutral-900/90 px-6 py-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigateDay(Math.max(1, day.day - 1))}
              disabled={day.day <= 1}
              className="rounded-lg border border-neutral-800 px-3 py-1.5 text-xs text-neutral-300 hover:bg-neutral-800 disabled:opacity-40 cursor-pointer"
            >
              ← Previous Day
            </button>
            <button
              onClick={() => onNavigateDay(Math.min(90, day.day + 1))}
              disabled={day.day >= 90}
              className="rounded-lg border border-neutral-800 px-3 py-1.5 text-xs text-neutral-300 hover:bg-neutral-800 disabled:opacity-40 cursor-pointer"
            >
              Next Day →
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="rounded-lg border border-neutral-800 px-4 py-1.5 text-xs font-medium text-neutral-300 hover:bg-neutral-800 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => onToggleComplete(day.day)}
              className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                  : 'bg-amber-500 text-neutral-950 hover:bg-amber-400'
              }`}
            >
              <span>{isCompleted ? '✓ Completed (1 Hr Logged)' : 'Mark Day as Completed'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
