import { useState, useEffect } from 'react';
import { UserProgress } from '../types/curriculum';

const STORAGE_KEY = 'ccao_f_study_progress_v2';

const defaultProgress: UserProgress = {
  completedDays: [1], // start with day 1 unlocked/started as gentle onboarding
  completedTaskIds: ['d1-t1', 'd1-t2'],
  studyNotes: {
    1: 'Started CCAO-F 90-day preparation! The exam focuses on 7 domains with Output Evaluation holding the largest weight (21%).'
  },
  studyMinutesLogged: 60,
  startDate: new Date().toISOString(),
  bookmarkedDays: [],
  examScores: []
};

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load user progress from localStorage', e);
    }
    return defaultProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save user progress to localStorage', e);
    }
  }, [progress]);

  const toggleDayComplete = (day: number) => {
    setProgress(prev => {
      const exists = prev.completedDays.includes(day);
      const newDays = exists 
        ? prev.completedDays.filter(d => d !== day)
        : [...prev.completedDays, day].sort((a, b) => a - b);
      
      // Auto adjust logged study minutes if marking complete
      const additionalMinutes = exists ? -60 : 60;
      const newMinutes = Math.max(0, prev.studyMinutesLogged + additionalMinutes);

      return {
        ...prev,
        completedDays: newDays,
        studyMinutesLogged: newMinutes
      };
    });
  };

  const toggleTaskComplete = (taskId: string, dayNum: number) => {
    setProgress(prev => {
      const exists = prev.completedTaskIds.includes(taskId);
      const newTasks = exists
        ? prev.completedTaskIds.filter(id => id !== taskId)
        : [...prev.completedTaskIds, taskId];
      return {
        ...prev,
        completedTaskIds: newTasks
      };
    });
  };

  const saveNote = (day: number, noteText: string) => {
    setProgress(prev => ({
      ...prev,
      studyNotes: {
        ...prev.studyNotes,
        [day]: noteText
      }
    }));
  };

  const toggleBookmark = (day: number) => {
    setProgress(prev => {
      const exists = prev.bookmarkedDays.includes(day);
      return {
        ...prev,
        bookmarkedDays: exists
          ? prev.bookmarkedDays.filter(d => d !== day)
          : [...prev.bookmarkedDays, day]
      };
    });
  };

  const logStudyMinutes = (minutes: number) => {
    setProgress(prev => ({
      ...prev,
      studyMinutesLogged: prev.studyMinutesLogged + minutes
    }));
  };

  const recordExamScore = (score: number, total: number, passed: boolean) => {
    setProgress(prev => ({
      ...prev,
      examScores: [
        ...prev.examScores,
        {
          date: new Date().toISOString(),
          score,
          total,
          passed
        }
      ]
    }));
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset your 90-day study progress? This cannot be undone.')) {
      setProgress({
        completedDays: [],
        completedTaskIds: [],
        studyNotes: {},
        studyMinutesLogged: 0,
        startDate: new Date().toISOString(),
        bookmarkedDays: [],
        examScores: []
      });
    }
  };

  const exportProgress = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(progress, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `ccao_f_study_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importProgress = (jsonString: string) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed.completedDays)) {
        setProgress(parsed);
        return true;
      }
    } catch (e) {
      console.error('Invalid backup JSON', e);
    }
    return false;
  };

  return {
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
  };
}
