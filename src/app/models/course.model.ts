import { CourseLevel } from './course-registration.model';

export interface Course {
  level: CourseLevel;
  duration: string;
  objectives: string[];
  outcomes: string[];
  price?: string;
}

export const COURSES: Course[] = [
  {
    level: 'A1',
    duration: '3 mois',
    objectives: [
      'Comprendre et utiliser des expressions familières',
      'Se présenter et présenter les autres',
      'Poser des questions simples',
      'Communiquer de façon simple',
    ],
    outcomes: [
      'Base solide en allemand',
      'Interaction quotidienne simple',
      'Préparation niveau A2',
    ],
  },
  {
    level: 'A2',
    duration: '3 mois',
    objectives: [
      'Comprendre des phrases isolées',
      'Communiquer sur des sujets familiers',
      'Décrire son environnement',
      'Exprimer des besoins immédiats',
    ],
    outcomes: [
      'Communication quotidienne fluide',
      'Autonomie dans les situations courantes',
      'Préparation niveau B1',
    ],
  },
  {
    level: 'B1',
    duration: '4 mois',
    objectives: [
      'Comprendre les points essentiels',
      'Se débrouiller en voyage',
      'Produire un discours simple',
      'Raconter des expériences',
    ],
    outcomes: [
      'Autonomie en Allemagne',
      'Communication professionnelle de base',
      'Préparation niveau B2',
    ],
  },
  {
    level: 'B2',
    duration: '4 mois',
    objectives: [
      'Comprendre des textes complexes',
      'Communiquer avec aisance',
      'Développer un point de vue',
      'Argumenter efficacement',
    ],
    outcomes: [
      'Accès études supérieures en Allemagne',
      'Communication professionnelle avancée',
      'Préparation examens internationaux',
    ],
  },
];
