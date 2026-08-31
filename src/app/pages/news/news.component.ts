import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  featured?: boolean;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  selectedNews: NewsItem | null = null;

news: NewsItem[] = [
  {
    id: 1,
    title: 'Apprenez l’allemand et préparez votre avenir',
    excerpt:
      'Découvrez nos formations d’allemand de A1 à B2 et préparez-vous efficacement pour vos projets en Allemagne.',
    content:
      'ITLA Academy vous accompagne dans votre apprentissage de la langue allemande, du niveau A1 jusqu’au niveau B2. Nos formations sont conçues pour vous permettre de progresser rapidement et de vous préparer à vos projets académiques ou professionnels en Allemagne.',
    image: 'assets/actualites/imlo1.jpeg',
    date: '31 août 2026',
    category: 'Formation',
    featured: true
  },

  {
    id: 2,
    title: 'Nouvelles sessions de formation disponibles',
    excerpt:
      'Les inscriptions pour nos prochaines sessions d’allemand sont ouvertes.',
    content:
      'Les inscriptions sont actuellement ouvertes pour les prochaines sessions de formation à ITLA Academy. Que vous soyez débutant ou que vous souhaitiez perfectionner votre niveau, nous avons une formation adaptée à votre profil.',
    image:
      'assets/actualites/imlo1.jpeg',
    date: '28 août 2026',
    category: 'Formation'
  },

  {
    id: 3,
    title: 'Préparez votre projet d’études en Allemagne',
    excerpt:
      'Vous souhaitez étudier en Allemagne ? ITLA Academy vous accompagne dans votre préparation linguistique.',
    content:
      'La maîtrise de l’allemand est un élément essentiel pour réussir votre projet d’études en Allemagne. Nos formations vous permettent de développer les compétences linguistiques nécessaires pour votre parcours.',
    image:
      'https://mhbeducation.com/_next/image?q=75&url=https%3A%2F%2Fmhbeducation.com%2Fmedia%2Fcountries%2FGemini_Generated_Image_1cz6bl1cz6bl1cz6.png&w=3840',
    date: '25 août 2026',
    category: 'Allemagne'
  },

  {
    id: 4,
    title: 'Pourquoi apprendre l’allemand aujourd’hui ?',
    excerpt:
      'L’allemand ouvre de nombreuses opportunités académiques et professionnelles.',
    content:
      'Apprendre l’allemand représente un véritable investissement pour votre avenir. L’Allemagne offre de nombreuses opportunités dans les domaines des études, de la formation professionnelle et de l’emploi.',
    image:
      'https://www.uni-leipzig.de/fileadmin/studiengangsdatenbank/bilder/Studiengaenge/Philologische_Fakultaet/Lehr-_u_Lernsituationen/philologische_fakultaet_deutsch_als_fremdsprache_seminar_1_.jpg',
    date: '20 août 2026',
    category: 'Conseils'
  },

  {
    id: 5,
    title: 'ITLA Academy, votre partenaire pour l’Allemagne',
    excerpt:
      'Un accompagnement adapté à votre projet et à vos ambitions.',
    content:
      'Notre équipe vous accompagne dans votre parcours linguistique et vous aide à mieux préparer votre projet vers l’Allemagne.',
    image:
      'https://static.dw.com/image/16414700_904.webp',
    date: '18 août 2026',
    category: 'ITLA Academy'
  },

  {
    id: 6,
    title: 'Passez votre examen ECL avec ITLA Academy',
    excerpt:
      'ITLA Academy vous accompagne dans la préparation de votre examen de langue.',
    content:
      'ITLA Academy est également un centre d’examen ECL. Préparez votre examen dans les meilleures conditions grâce à notre accompagnement et nos formations adaptées.',
    image:
      'https://assets.flyingteachers.com/production/uploads/Bilder/Hero/telc_hero_block_2025-03-25-090132_ywac.jpg',
    date: '15 août 2026',
    category: 'Examen'
  }
];

  get featuredNews(): NewsItem | undefined {
    return this.news.find(item => item.featured);
  }

  get otherNews(): NewsItem[] {
    return this.news.filter(item => !item.featured);
  }

  openNews(item: NewsItem): void {
    this.selectedNews = item;
    document.body.style.overflow = 'hidden';
  }

  closeNews(): void {
    this.selectedNews = null;
    document.body.style.overflow = '';
  }
}