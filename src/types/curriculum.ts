export type DomainId = 
  | 'evaluation'
  | 'workflow'
  | 'governance'
  | 'prompting'
  | 'models'
  | 'knowledge'
  | 'troubleshooting';

export interface DomainInfo {
  id: DomainId;
  name: string;
  weight: number; // percentage
  description: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgLight: string;
}

export interface DayTask {
  id: string;
  text: string;
  durationMinutes: number;
}

export interface CurriculumDay {
  day: number;
  month: 1 | 2 | 3;
  week: number;
  domainId: DomainId;
  title: string;
  shortSummary: string;
  timeAllocation: {
    conceptMinutes: number;
    handsOnMinutes: number;
    reviewMinutes: number;
  };
  learningObjectives: string[];
  conceptGuide: string;
  handsOnExercise: {
    taskName: string;
    instructions: string;
    promptTemplate?: string;
    expectedOutcome: string;
  };
  tasks: DayTask[];
  mentorTip: string;
  examTrapWarning: string;
  isMilestone?: boolean;
  milestoneTitle?: string;
  milestoneReward?: string;
}

export interface UserProgress {
  completedDays: number[]; // array of completed day numbers
  completedTaskIds: string[]; // individual subtasks completed
  studyNotes: Record<number, string>; // day -> notes
  studyMinutesLogged: number;
  startDate: string; // ISO string
  bookmarkedDays: number[];
  examScores: {
    date: string;
    score: number;
    total: number;
    passed: boolean;
  }[];
}

export interface PracticeQuestion {
  id: string;
  domainId: DomainId;
  scenario: string;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctOptionId: string;
  explanation: string;
  whyOthersAreIncorrect: Record<string, string>;
  difficulty: 'Foundation' | 'Intermediate' | 'Scenario-Exam';
}
