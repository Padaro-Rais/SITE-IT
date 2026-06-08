import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images: GalleryImage[] = [
    {
      url: './assets/1.jpeg',
      title: 'Cours de langues',
      description: 'Apprenez l\'allemand et le français dans nos salles de classe modernes'
    },
    {
      url: './assets/2.jpeg',
      title: 'Centre Douala',
      description: 'Notre centre principal à Douala avec des équipements de pointe'
    },
    {
      url: './assets/3.jpeg',
      title: 'Étudiants actifs',
      description: 'Nos étudiants en pleine session d\'apprentissage'
    },
    {
      url: './assets/4.jpeg',
      title: 'Examens ECL',
      description: 'Centre d\'examen ECL certifié pour le français et l\'allemand'
    },
    {
      url: './assets/5.jpeg',
      title: 'Bibliothèque',
      description: 'Une large collection de ressources pédagogiques'
    },
    {
      url: './assets/6.jpeg',
      title: 'Laboratoire multimédia',
      description: 'Équipements modernes pour l\'apprentissage des langues'
    },



    {
      url: './assets/g1.jpeg',
      title: 'Laboratoire multimédia',
      description: 'Équipements modernes pour l\'apprentissage des langues'
    },

    {
      url: './assets/g2.jpeg',
      title: 'Laboratoire multimédia',
      description: 'Équipements modernes pour l\'apprentissage des langues'
    },

    {
      url: './assets/g3.jpeg',
      title: 'Laboratoire multimédia',
      description: 'Équipements modernes pour l\'apprentissage des langues'
    },

    {
      url: './assets/g4.jpeg',
      title: 'Laboratoire multimédia',
      description: 'Équipements modernes pour l\'apprentissage des langues'
    }
    ,

    {
      url: './assets/g5.jpeg',
      title: 'Laboratoire multimédia',
      description: 'Équipements modernes pour l\'apprentissage des langues'
    }

    ,

    {
      url: './assets/g6.jpeg',
      title: 'Laboratoire multimédia',
      description: 'Équipements modernes pour l\'apprentissage des langues'
    }
  ];

  selectedImage: GalleryImage | null = null;

  openImage(image: GalleryImage): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
