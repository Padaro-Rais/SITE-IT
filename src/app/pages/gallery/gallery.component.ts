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
  { url: './assets/1.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/2.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/3.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/4.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/5.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/6.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/7.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/8.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/9.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/10.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },

  { url: './assets/11.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/12.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/13.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/14.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/15.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/16.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/17.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/18.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/19.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/20.jpg', title: 'ITLA-Academy', description: 'Activités de formation' },

  { url: './assets/21.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/22.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/23.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/24.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/25.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/26.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/27.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/28.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/29.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/30.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },

  { url: './assets/31.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/32.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/33.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/34.jpeg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/gg/35.jpg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/gg/36.jpg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/gg/37.jpg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/gg/38.jpg', title: 'ITLA-Academy', description: 'Activités de formation' },
  { url: './assets/gg/39.jpg', title: 'ITLA-Academy', description: 'Activités de formation' },
];
shuffle(array: any[]) {
  return array.sort(() => Math.random() - 0.5);
}

  selectedImage: GalleryImage | null = null;

  openImage(image: GalleryImage): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
