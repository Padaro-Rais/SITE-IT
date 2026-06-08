import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselComponent, Slide } from '../../shared/components/carousel/carousel.component';
import { COURSES } from '../../models';
import { CENTERS } from '../../models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  slides: Slide[] = [
    {
      title: 'Bienvenue chez ITLA Academy',
      subtitle: 'Votre Expert en Voyage pour l\'Allemage',
      image: './assets/34.jpeg'
    },
    {
      title: 'Formation en Allemand',
      subtitle: 'Apprenez l\'allemand avec les meilleurs - Tous niveaux de A1 à B2',
      image: './assets/21.jpeg'
    },
    {
      title: 'Centre d\'examen ECL agréé',
      subtitle: 'Passez vos examens de certification en allemand avec nous',
      image: './assets/22.jpeg'
    }
  ];

  courses = COURSES.map(course => ({
    ...course,
    name: this.getCourseName(course.level),
    description: this.getCourseDescription(course.level)
  }));

  centers = CENTERS;

  reasons = [
    { icon: '👨‍🏫', title: 'Enseignants qualifiés', description: 'Notre équipe d\'enseignants expérimentés et certifiés vous accompagne' },
    { icon: '📚', title: 'Méthodes modernes', description: 'Des méthodes d\'enseignement innovantes et interactives' },
    { icon: '🎯', title: 'Préparation aux examens', description: 'Formation spécifique pour les examens ECL et autres certifications' },
    { icon: '🏆', title: 'Taux de réussite élevé', description: 'Plus de 95% de nos étudiants réussissent leurs examens' },
    { icon: '✅', title: 'Centres agréés', description: 'Nos centres sont officiellement reconnus et certifiés' },
    { icon: '📈', title: 'Progression rapide', description: 'Des résultats visibles dès les premières semaines' }
  ];

  private getCourseName(level: string): string {
    const names: {[key: string]: string} = {
      'A1': 'Allemand A1 - Débutant',
      'A2': 'Allemand A2 - Élémentaire',
      'B1': 'Allemand B1 - Intermédiaire',
      'B2': 'Allemand B2 - Intermédiaire avancé',
      'C1': 'Allemand C1 - Avancé'
    };
    return names[level] || level;
  }

  private getCourseDescription(level: string): string {
    const descriptions: {[key: string]: string} = {
      'A1': 'Premiers pas en allemand - Communication de base',
      'A2': 'Conversations quotidiennes et situations courantes',
      'B1': 'Communication autonome dans des situations variées',
      'B2': 'Expression fluide et spontanée',
      'C1': 'Maîtrise approfondie de la langue'
    };
    return descriptions[level] || '';
  }

  openForm() {
    window.open('https://exam.eclexam.eu/', '_blank');
  }
}
