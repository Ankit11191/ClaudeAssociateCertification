import React from 'react';
import { DOMAINS } from '../data/domains';
import { ALL_CURRICULUM_DAYS } from '../data/curriculumData';
import { DomainId } from '../types/curriculum';

interface ProgressOverviewProps {
  completedDays: number[];
  studyMinutesLogged: number;
  openDayModal: (dayNum: number) => void;
  openCertificateModal: () => void;
}

export const ProgressOverview: React.FC<ProgressOverviewProps> = ({
  completedDays,
  studyMinutesLogged,
  openDayModal,
  openCertificateModal
}) => {
  const totalDays = 90;
  const completedCount = completedDays.length;
  const percentage = Math.round((completedCount / totalDays) * 100);
  const hoursLogged = Math.round(studyMinutesLogged / 60);

  // Scaled readiness score: Base 200 + up to 800 proportional to completion
  const estimatedReadiness = Math.min(1000, Math.round(200 + (completedCount / 90) * 800));
  const isPassingScore = estimatedReadiness >= 720;

  // Domain breakdown
  const domainStats = (Object.keys(DOMAINS) as DomainId[]).map(domainKey => {
    const domain = DOMAINS[domainKey];
    const totalInDomain = ALL_CURRICULUM_DAYS.filter(d => d.domainId === domainKey).length;
    const completedInDomain = ALL_CURRICULUM_DAYS.filter(
      d => d.domainId === domainKey && completedDays.includes(d.day)
    ).length;
    const percent = totalInDomain > 0 ? Math.round((completedInDomain / totalInDomain) * 100) : 0;
    return {
      ...domain,
      totalInDomain,
      completedInDomain,
      percent
    };
  });

  // Milestones list
  const milestones = [
    { day: 7, title: 'Model Strategist', badge: 'Tier 1', desc: 'Week 1: Model Ecosystem & Artifacts' },
    { day: 14, title: 'Prompt Architect', badge: 'Tier 2', desc: 'Week 2: XML & Enterprise Prompting' },
    { day: 30, title: 'Foundations Certified', badge: 'Month 1', desc: 'Phase 1: Core Architecture Mastered' },
    { day: 44, title: 'Workflow Architect', badge: 'Tier 3', desc: 'Week 6: Business Solution Integration' },
    { day: 60, title: 'Enterprise Lead', badge: 'Month 2', desc: 'Phase 2: Governance & Projects Mastered' },
    { day: 67, title: 'Validation Specialist', badge: 'Tier 4', desc: 'Week 9: Forensic Hallucination Detection' },
    { day: 90, title: 'CCAO-F Ready Champion', badge: 'Graduate', desc: 'Full 90-Day Curriculum Completed' }
  ];

  return (
    <section className="mb-8 rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm">
      
      {/* Top Banner & High-Level KPIs */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pb-6 border-b border-neutral-800">
        
        {/* Main Progress Ring & Completion */}
        <div className="lg:col-span-2 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
            <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
              <circle
                className="text-neutral-800"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
              />
              <circle
                className="text-amber-500 transition-all duration-700 ease-out"
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 42}`}
                strokeDashoffset={`${2 * Math.PI * 42 * (1 - percentage / 100)}`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="font-mono text-2xl font-bold text-neutral-100 tabular-nums">
                {percentage}%
              </span>
              <span className="text-[10px] text-neutral-400">Complete</span>
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold tracking-tight text-neutral-100">
              Your 90-Day Certification Journey
            </h2>
            <p className="mt-1 text-xs text-neutral-400 leading-relaxed">
              Target: <span className="text-amber-400 font-medium">1 hour/day</span> · Scaled passing bar: <span className="text-amber-400 font-medium">720 / 1000 points</span> on CCAO-F.
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-neutral-300">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                <span><strong className="font-mono text-neutral-100 tabular-nums">{completedCount}</strong> of 90 Days Completed</span>
              </div>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span><strong className="font-mono text-neutral-100 tabular-nums">{hoursLogged}</strong> Hours Dedicated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scaled Readiness Score Card */}
        <div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
              <span>Estimated Readiness Score</span>
              <span className="font-mono text-xs">{estimatedReadiness} / 1000</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-neutral-100 tabular-nums">
                {estimatedReadiness}
              </span>
              <span className="text-xs text-neutral-400">pts</span>
              <span className={`ml-auto text-xs font-semibold ${isPassingScore ? 'text-emerald-400' : 'text-amber-400'}`}>
                {isPassingScore ? 'Passing Margin' : 'Approaching 720'}
              </span>
            </div>
            
            {/* Score progress bar with 720 pass marker */}
            <div className="relative mt-2 h-2 w-full rounded-full bg-neutral-800">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${(estimatedReadiness / 1000) * 100}%` }}
              />
              {/* 720 pass threshold pin */}
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-neutral-400 shadow-sm"
                style={{ left: '72%' }}
                title="720 Passing Threshold"
              />
            </div>
            <div className="mt-1 flex justify-between text-[10px] text-neutral-500">
              <span>0</span>
              <span className="text-neutral-300 font-mono">720 Pass Mark</span>
              <span>1000</span>
            </div>
          </div>

          <p className="mt-2 text-[11px] text-neutral-400">
            {completedCount >= 65 
              ? 'Excellent mastery! You have cleared all required threshold topics.' 
              : 'Complete your daily 1-hour block to build steady momentum towards 720+.'}
          </p>
        </div>

        {/* Fast Action Card */}
        <div className="rounded-lg border border-neutral-800 bg-neutral-950/60 p-4 flex flex-col justify-between">
          <div>
            <span className="text-xs font-medium text-neutral-400">Current Study Phase</span>
            <div className="mt-1 text-sm font-semibold text-neutral-100">
              {completedCount < 30 ? 'Month 1: Core Foundations & Prompting' : completedCount < 60 ? 'Month 2: Workflows, Governance & Projects' : 'Month 3: Output Evaluation & Exam Drills'}
            </div>
            <p className="mt-1 text-xs text-neutral-400">
              Next uncompleted: <strong className="text-neutral-200">Day {Math.min(90, completedCount + 1)}</strong>
            </p>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={() => openDayModal(Math.min(90, completedCount + 1))}
              className="flex-1 rounded-md bg-neutral-800 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-neutral-700 transition-colors text-center cursor-pointer"
            >
              Open Day {Math.min(90, completedCount + 1)}
            </button>
            <button
              onClick={openCertificateModal}
              className="rounded-md border border-neutral-700 px-2.5 py-1.5 text-xs text-neutral-300 hover:border-neutral-500 transition-colors cursor-pointer"
              title="View Certificate Readiness"
            >
              Badge
            </button>
          </div>
        </div>

      </div>

      {/* Domain Breakdown Section */}
      <div className="pt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Domain Mastery Breakdown (Weighted Syllabus)
          </h3>
          <span className="text-xs text-neutral-500">
            7 Official Exam Domains
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {domainStats.map(domain => (
            <div 
              key={domain.id}
              className="rounded-lg border border-neutral-800/80 bg-neutral-950/40 p-3 hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-medium text-neutral-200 truncate pr-2" title={domain.name}>
                  {domain.name}
                </span>
                <span className="font-mono text-neutral-400 shrink-0 tabular-nums">
                  {domain.weight}%
                </span>
              </div>

              <div className="h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden my-1.5">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${domain.percent}%`,
                    backgroundColor: domain.color
                  }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-neutral-500">
                <span>{domain.completedInDomain}/{domain.totalInDomain} Days</span>
                <span className="font-mono tabular-nums text-neutral-300">{domain.percent}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unlocked Milestones Row */}
      <div className="mt-6 pt-4 border-t border-neutral-800/70">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Key Milestone Badges
          </h3>
          <span className="text-xs text-neutral-500">
            {milestones.filter(m => completedDays.includes(m.day)).length} of {milestones.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {milestones.map(m => {
            const isUnlocked = completedDays.includes(m.day);
            return (
              <button
                key={m.day}
                onClick={() => openDayModal(m.day)}
                className={`flex flex-col items-center justify-center rounded-lg p-2.5 text-center transition-all cursor-pointer border ${
                  isUnlocked
                    ? 'border-amber-500/40 bg-amber-950/20 text-neutral-100 hover:border-amber-400'
                    : 'border-neutral-800 bg-neutral-950/30 text-neutral-500 opacity-60 hover:opacity-80'
                }`}
                title={`Day ${m.day}: ${m.title} - ${m.desc}`}
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-full mb-1.5 ${
                  isUnlocked ? 'bg-amber-500 text-neutral-950 shadow-sm' : 'bg-neutral-800 text-neutral-400'
                }`}>
                  <span className="font-mono text-xs font-bold">D{m.day}</span>
                </div>
                <span className="text-[11px] font-medium leading-tight truncate w-full">
                  {m.title}
                </span>
                <span className="text-[9px] text-neutral-400 mt-0.5">
                  {isUnlocked ? 'Unlocked' : `Locked (Day ${m.day})`}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
};
