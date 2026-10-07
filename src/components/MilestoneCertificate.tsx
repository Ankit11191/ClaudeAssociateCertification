import React from 'react';

interface MilestoneCertificateProps {
  isOpen: boolean;
  onClose: () => void;
  completedDaysCount: number;
  studyMinutesLogged: number;
}

export const MilestoneCertificate: React.FC<MilestoneCertificateProps> = ({
  isOpen,
  onClose,
  completedDaysCount,
  studyMinutesLogged
}) => {
  if (!isOpen) return null;

  const hoursLogged = Math.round(studyMinutesLogged / 60);
  const percentage = Math.round((completedDaysCount / 90) * 100);
  const isReady = completedDaysCount >= 90;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8 shadow-2xl text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200 transition-colors cursor-pointer"
        >
          ✕
        </button>

        {/* Certificate Frame */}
        <div className="rounded-xl border-2 border-amber-500/40 bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 sm:p-10 shadow-inner relative overflow-hidden">
          
          {/* Subtle watermark geometry */}
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />

          {/* Insignia Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-neutral-950 shadow-lg mb-4">
            <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6" />
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
            </svg>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
            Certificate of Preparation & Mastery
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-100 tracking-tight">
            Claude Certified Associate
          </h2>
          <span className="text-sm font-semibold text-neutral-300 block mt-1">
            Foundations (CCAO-F) · 90-Day Curriculum
          </span>

          <p className="mt-4 text-xs text-neutral-400 max-w-lg mx-auto leading-relaxed">
            This certifies continuous daily dedication of 1 hour per day across all 7 official Anthropic certification domains: Output Evaluation, Workflow Integration, Governance & Risk, Prompting, Model Selection, Knowledge Management, and Troubleshooting.
          </p>

          {/* Stats Badges */}
          <div className="my-6 grid grid-cols-3 gap-3 max-w-md mx-auto text-center">
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/80 p-3">
              <span className="font-mono text-xl font-bold text-amber-400 tabular-nums">
                {completedDaysCount}/90
              </span>
              <span className="block text-[10px] text-neutral-400 mt-0.5">Days Cleared</span>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/80 p-3">
              <span className="font-mono text-xl font-bold text-emerald-400 tabular-nums">
                {hoursLogged} Hrs
              </span>
              <span className="block text-[10px] text-neutral-400 mt-0.5">Time Dedicated</span>
            </div>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/80 p-3">
              <span className="font-mono text-xl font-bold text-sky-400 tabular-nums">
                {percentage}%
              </span>
              <span className="block text-[10px] text-neutral-400 mt-0.5">Readiness</span>
            </div>
          </div>

          {/* Status Label */}
          <div className="text-xs">
            <span className="text-neutral-400">Current Status: </span>
            <span className={`font-semibold ${isReady ? 'text-emerald-400' : 'text-amber-400'}`}>
              {isReady ? 'Ready for Official Exam Appointment' : `In Training (${90 - completedDaysCount} Days to Target)`}
            </span>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800/80 text-[10px] text-neutral-500 font-mono">
            Candidate ID: CCAO-F-{new Date().getFullYear()}-MASTER · Passing Threshold: 720/1000
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => window.print()}
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-xs font-medium text-neutral-200 hover:bg-neutral-800 cursor-pointer"
          >
            Print / Save PDF
          </button>
          <button
            onClick={onClose}
            className="rounded-lg bg-amber-500 px-5 py-2 text-xs font-bold text-neutral-950 hover:bg-amber-400 cursor-pointer"
          >
            Continue 90-Day Journey
          </button>
        </div>

      </div>
    </div>
  );
};
