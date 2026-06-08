import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  private newsService = inject(NewsService);

  news: News[] = [];
  loading = true;
  selectedNews: News | null = null;

  async ngOnInit(): Promise<void> {
    await this.loadNews();
  }

  async loadNews(): Promise<void> {
    this.loading = true;
    this.news = await this.newsService.getPublishedNews();
    this.loading = false;
  }

  openNews(newsItem: News): void {
    this.selectedNews = newsItem;
  }

  closeNews(): void {
    this.selectedNews = null;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
