import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Slide {
  title: string;
  subtitle: string;
  image?: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: Slide[] = [];
  @Input() autoPlay = true;
  @Input() interval = 4000;

  currentIndex = 0;
  private autoPlayInterval?: number;

  ngOnInit(): void {
    if (this.autoPlay && this.slides.length > 0) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  private startAutoPlay(): void {
    this.autoPlayInterval = window.setInterval(() => {
      this.next();
    }, this.interval);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  previous(): void {
    this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    if (this.autoPlay) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }
}
