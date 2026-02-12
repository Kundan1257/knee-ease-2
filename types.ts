
export interface Exercise {
  id: string;
  name: string;
  duration: string;
  intensity: 'Low' | 'Medium' | 'High';
  description: string;
  icon: string;
}

export interface UserState {
  hasOnboarded: boolean;
  painLevel: number;
  lastAssessmentDate: string | null;
  completedExercises: string[];
}

export enum AppScreen {
  ONBOARDING = 'ONBOARDING',
  DASHBOARD = 'DASHBOARD',
  ASSESSMENT = 'ASSESSMENT',
  EXERCISES = 'EXERCISES',
  AI_COACH = 'AI_COACH'
}
