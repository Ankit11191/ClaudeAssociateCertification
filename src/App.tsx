import React, { useState } from 'react';
import { useUserProgress } from './hooks/useUserProgress';
import { Header } from './components/Header';
import { ProgressOverview } from './components/ProgressOverview';
import { RoadmapTimeline } from './components/RoadmapTimeline';
import { DayDetailModal } from './components/DayDetailModal';
import { StudyTimer } from './components/StudyTimer';
import { PracticeExamModal } from './components/PracticeExamModal';
import { KnowledgeVaultModal } from './components/KnowledgeVaultModal';
import { MilestoneCertificate } from './components/MilestoneCertificate';
import { DomainsView } from './components/DomainsView';
import { getDayByNumber, ALL_CURRICULUM_DAYS } from './data/curriculumData';
import { CurriculumDay, DomainId } from './types/curriculum';

export default function App() {
  const {
    progress,
    toggleDayComplete,
    toggleTaskComplete,
    saveNote,
    toggleBookmark,
    logStudyMinutes,
    recordExamScore,
    resetProgress,
    exportProgress,
    importProgress
  } = useUserProgress();

  const [currentTab, setCurrentTab] = useState<'roadmap' | 'domains' | 'exam' | 'vault' | 'certificate'>('roadmap');
  const [selectedDayNumber, setSelectedDayNumber] = useState<number | null>(null);
  const [isDayModalOpen, setIsDayModalOpen] = useState(false);
  const [isTimerModalOpen, setIsTimerModalOpen] = useState(false);
  const [isExamModalOpen, setIsExamModalOpen] = useState(false);
  const [isVaultModalOpen, setIsVaultModalOpen] = useState(false);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  // Selected Day Data
  const selectedDay: CurriculumDay | null = selectedDayNumber ? (getDayByNumber(selectedDayNumber) || null) : null;

  const handleOpenDay = (dayNum: number) => {
    setSelectedDayNumber(dayNum);
    setIsDayModalOpen(true);
  };

  const handleOpenToday = () => {
    // Open next incomplete day or day 1
    const nextDay = Math.min(90, progress.completedDays.length + 1);
    handleOpenDay(nextDay);
  };

  const handleSelectDomainForRoadmap = (_domainId: DomainId) => {
    setCurrentTab('roadmap');
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (content) {
          const success = importProgress(content);
          if (success) {
            alert('Study progress successfully restored!');
          } else {
            alert('Could not restore file: Invalid JSON format.');
          }
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      
      {/* Top Bar Contract Navigation */}
      <Header
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          if (tab === 'exam') {
            setIsExamModalOpen(true);
          } else if (tab === 'vault') {
            setIsVaultModalOpen(true);
          } else if (tab === 'certificate') {
            setIsCertificateModalOpen(true);
          } else {
            setCurrentTab(tab);
          }
        }}
        completedCount={progress.completedDays.length}
        openTimerModal={() => setIsTimerModalOpen(true)}
        openTodayModal={handleOpenToday}
      />

      {/* Main Container */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Mentor Welcome Banner */}
        <div className="mb-6 rounded-xl border border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-1">
              <span>Claude Certified Associate (CCAO-F) Mentor</span>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <span>1 Hour Daily Study Plan</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-100">
              Welcome to Your 90-Day Certification Preparation
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Designed around the 7 official syllabus domains: Output Evaluation (21%), Workflow Integration (16%), Governance & Risk (15%), Prompting (14%), Model Selection (12%), Knowledge Management (12%), and Troubleshooting (10%).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setIsTimerModalOpen(true)}
              className="flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800/80 px-3.5 py-2 text-xs font-semibold text-neutral-200 hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              <svg className="h-4 w-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Daily Focus Timer</span>
            </button>
            <button
              onClick={() => setIsExamModalOpen(true)}
              className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-neutral-950 hover:bg-amber-400 transition-colors shadow-sm cursor-pointer"
            >
              <span>Practice Exam (60 Q)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content Views */}
        {currentTab === 'roadmap' && (
          <>
            <ProgressOverview
              completedDays={progress.completedDays}
              studyMinutesLogged={progress.studyMinutesLogged}
              openDayModal={handleOpenDay}
              openCertificateModal={() => setIsCertificateModalOpen(true)}
            />

            <RoadmapTimeline
              completedDays={progress.completedDays}
              completedTaskIds={progress.completedTaskIds}
              bookmarkedDays={progress.bookmarkedDays}
              toggleDayComplete={toggleDayComplete}
              toggleBookmark={toggleBookmark}
              openDayModal={handleOpenDay}
            />
          </>
        )}

        {currentTab === 'domains' && (
          <DomainsView
            completedDays={progress.completedDays}
            onSelectDomainForRoadmap={handleSelectDomainForRoadmap}
          />
        )}

      </main>

      {/* Footer with Backup and Reset Actions */}
      <footer className="border-t border-neutral-800 bg-neutral-950 py-8 px-4 sm:px-6 lg:px-8 text-xs text-neutral-400">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-neutral-200">Claude Certified Associate (CCAO-F)</span>
            <span className="text-neutral-600">·</span>
            <span>90-Day Curriculum (1 Hr/Day)</span>
            <span className="text-neutral-600">·</span>
            <span className="font-mono text-neutral-300 tabular-nums">720 / 1000 Passing Score</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={exportProgress}
              className="hover:text-neutral-200 transition-colors cursor-pointer"
            >
              Export Backup
            </button>
            <label className="hover:text-neutral-200 transition-colors cursor-pointer">
              <span>Import Backup</span>
              <input type="file" accept=".json" onChange={handleImportFile} className="hidden" />
            </label>
            <span className="text-neutral-700">|</span>
            <button
              onClick={resetProgress}
              className="text-rose-400 hover:text-rose-300 transition-colors cursor-pointer"
            >
              Reset Data
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <DayDetailModal
        day={selectedDay}
        isOpen={isDayModalOpen}
        onClose={() => setIsDayModalOpen(false)}
        isCompleted={selectedDay ? progress.completedDays.includes(selectedDay.day) : false}
        completedTaskIds={progress.completedTaskIds}
        userNote={selectedDay ? (progress.studyNotes[selectedDay.day] || '') : ''}
        onToggleComplete={toggleDayComplete}
        onToggleTask={toggleTaskComplete}
        onSaveNote={saveNote}
        onOpenTimer={() => {
          setIsDayModalOpen(false);
          setIsTimerModalOpen(true);
        }}
        onNavigateDay={(dayNum) => setSelectedDayNumber(dayNum)}
      />

      <StudyTimer
        isOpen={isTimerModalOpen}
        onClose={() => setIsTimerModalOpen(false)}
        onLogMinutes={logStudyMinutes}
        activeDayNum={selectedDayNumber || Math.min(90, progress.completedDays.length + 1)}
      />

      <PracticeExamModal
        isOpen={isExamModalOpen}
        onClose={() => setIsExamModalOpen(false)}
        onRecordScore={recordExamScore}
      />

      <KnowledgeVaultModal
        isOpen={isVaultModalOpen}
        onClose={() => setIsVaultModalOpen(false)}
      />

      <MilestoneCertificate
        isOpen={isCertificateModalOpen}
        onClose={() => setIsCertificateModalOpen(false)}
        completedDaysCount={progress.completedDays.length}
        studyMinutesLogged={progress.studyMinutesLogged}
      />

    </div>
  );
}
