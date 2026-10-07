import React from 'react';
import { DOMAINS } from '../data/domains';
import { ALL_CURRICULUM_DAYS } from '../data/curriculumData';
import { DomainId } from '../types/curriculum';

interface DomainsViewProps {
  completedDays: number[];
  onSelectDomainForRoadmap: (domainId: DomainId) => void;
}

export const DomainsView: React.FC<DomainsViewProps> = ({
  completedDays,
  onSelectDomainForRoadmap
}) => {
  const domainKeys = Object.keys(DOMAINS) as DomainId[];

  return (
    <div className="space-y-6">
      
      {/* Intro Header */}
      <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
          Official Anthropic Syllabus Architecture
        </span>
        <h2 className="text-xl font-bold text-neutral-100 mt-1">
          The 7 Domains of Claude Certified Associate (Foundations)
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
          The CCAO-F exam consists of 60 multiple-choice and multiple-response questions administered over 120 minutes. Candidates require a scaled score of 720 out of 1,000 to pass. Below is the official weighting and strategic study allocation for your 90-day preparation.
        </p>
      </div>

      {/* Domain Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {domainKeys.map(key => {
          const domain = DOMAINS[key];
          const daysInDomain = ALL_CURRICULUM_DAYS.filter(d => d.domainId === key);
          const completedInDomain = daysInDomain.filter(d => completedDays.includes(d.day)).length;
          const percentage = daysInDomain.length > 0 
            ? Math.round((completedInDomain / daysInDomain.length) * 100) 
            : 0;

          return (
            <div
              key={key}
              className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-950/70 p-5 hover:border-neutral-700 transition-all"
            >
              <div>
                
                {/* Header with Weight */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold uppercase tracking-wider ${domain.textColor}`}>
                    Domain Weight: {domain.weight}%
                  </span>
                  <span className="font-mono text-xs text-neutral-400">
                    {completedInDomain}/{daysInDomain.length} Days Completed
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-100">
                  {domain.name}
                </h3>

                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  {domain.description}
                </p>

                {/* Progress bar */}
                <div className="mt-4 h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: domain.color
                    }}
                  />
                </div>

              </div>

              {/* Action: Jump to Days */}
              <div className="mt-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-neutral-400">
                  Total dedicated time: <strong className="text-neutral-200">{daysInDomain.length} Hours</strong>
                </span>
                <button
                  onClick={() => onSelectDomainForRoadmap(key)}
                  className="rounded-lg bg-neutral-900 border border-neutral-700 px-3 py-1.5 font-medium text-amber-400 hover:bg-neutral-800 hover:border-amber-500/50 transition-colors cursor-pointer"
                >
                  View {daysInDomain.length} Roadmap Days →
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
