export interface CourseRegistration {
  id?: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  center: string;
  level: CourseLevel;
  mode: LearningMode;
  status?: RegistrationStatus;
  created_at?: string;
}

export type CourseLevel = 'A1' | 'A2' | 'B1' | 'B2';
export type LearningMode = 'Présentiel' | 'En ligne';
export type RegistrationStatus = 'pending' | 'confirmed' | 'cancelled';

export const COURSE_LEVELS: CourseLevel[] = ['A1', 'A2', 'B1', 'B2'];
export const LEARNING_MODES: LearningMode[] = ['Présentiel', 'En ligne'];
