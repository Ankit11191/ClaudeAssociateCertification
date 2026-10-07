import React, { useState, useEffect } from 'react';

interface StudyTimerProps {
  isOpen: boolean;
  onClose: () => void;
  onLogMinutes: (minutes: number) => void;
  activeDayNum?: number;
}

export const StudyTimer: React.FC<StudyTimerProps> = ({
  isOpen,
  onClose,
  onLogMinutes,
  activeDayNum = 1
}) => {
  const [totalSeconds, setTotalSeconds] = useState(60 * 60); // 60 minutes default
  const [remainingSeconds, setRemainingSeconds] = useState(60 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<'60min' | '25min'>('60min');
  const [justCompleted, setJustCompleted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && remainingSeconds > 0) {
      interval = setInterval(() => {
        setRemainingSeconds(prev => prev - 1);
      }, 1000);
    } else if (remainingSeconds === 0 && isRunning) {
      setIsRunning(false);
      setJustCompleted(true);
      const minutesSpent = Math.round(totalSeconds / 60);
      onLogMinutes(minutesSpent);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, remainingSeconds, totalSeconds, onLogMinutes]);

  if (!isOpen) return null;

  const setTimerDuration = (newMode: '60min' | '25min') => {
    setIsRunning(false);
    setJustCompleted(false);
    setMode(newMode);
    const secs = newMode === '60min' ? 60 * 60 : 25 * 60;
    setTotalSeconds(secs);
    setRemainingSeconds(secs);
  };

  const handleReset = () => {
    setIsRunning(false);
    setJustCompleted(false);
    setRemainingSeconds(totalSeconds);
  };

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const progressPercent = Math.round(((totalSeconds - remainingSeconds) / totalSeconds) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-2xl text-center">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Deep Work Focus Session
            </span>
            <h3 className="text-base font-bold text-neutral-100">
              Daily 1-Hour Study Timer
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Mode Selector */}
        <div className="mt-4 flex justify-center gap-2">
          <button
            onClick={() => setTimerDuration('60min')}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              mode === '60min' ? 'bg-amber-500 text-neutral-950 font-bold' : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200'
            }`}
          >
            Full 60 Minutes (Daily Target)
          </button>
          <button
            onClick={() => setTimerDuration('25min')}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              mode === '25min' ? 'bg-amber-500 text-neutral-950 font-bold' : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200'
            }`}
          >
            25-Min Sprint
          </button>
        </div>

        {/* Circular Timer Visual */}
        <div className="relative my-8 flex items-center justify-center">
          <div className="relative h-56 w-56">
            <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
              <circle
                className="text-neutral-800"
                strokeWidth="6"
                stroke="currentColor"
                fill="transparent"
                r="44"
                cx="50"
                cy="50"
              />
              <circle
                className="text-amber-500 transition-all duration-300 ease-linear"
                strokeWidth="6"
                strokeDasharray={`${2 * Math.PI * 44}`}
                strokeDashoffset={`${2 * Math.PI * 44 * (1 - progressPercent / 100)}`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="44"
                cx="50"
                cy="50"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono text-4xl font-extrabold tracking-tight text-neutral-100 tabular-nums">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </span>
              <span className="text-xs text-neutral-400 mt-1">
                Day {activeDayNum} Study Block
              </span>
            </div>
          </div>
        </div>

        {/* Status Alert */}
        {justCompleted && (
          <div className="mb-4 rounded-lg bg-emerald-950/40 border border-emerald-500/40 p-3 text-xs text-emerald-300 font-medium">
            Great work! You completed your focus session and logged your study time.
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`rounded-xl px-6 py-2.5 text-sm font-bold shadow-md transition-all cursor-pointer ${
              isRunning
                ? 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700'
                : 'bg-amber-500 text-neutral-950 hover:bg-amber-400'
            }`}
          >
            {isRunning ? 'Pause Timer' : 'Start Focus Session'}
          </button>
          <button
            onClick={handleReset}
            className="rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-xs font-medium text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 transition-colors cursor-pointer"
          >
            Reset
          </button>
        </div>

        {/* Quick Log Action */}
        <div className="mt-6 pt-4 border-t border-neutral-800/80">
          <button
            onClick={() => {
              onLogMinutes(60);
              alert('Logged 60 minutes to your CCAO-F study tracker!');
            }}
            className="text-xs text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            + Quick Log 1 Hour without timer
          </button>
        </div>

      </div>
    </div>
  );
};
