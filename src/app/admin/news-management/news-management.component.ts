import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './news-management.component.html',
  styleUrls: ['./news-management.component.scss']
})
export class NewsManagementComponent implements OnInit {
  private newsService = inject(NewsService);

  news: News[] = [];
  loading = true;
  showModal = false;
  editingNews: News | null = null;

  formData: Partial<News> = {
    title: '',
    content: '',
    image_url: '',
    video_url: '',
    published: false,
    publish_date: new Date().toISOString().split('T')[0]
  };

  async ngOnInit(): Promise<void> {
    await this.loadNews();
  }

  async loadNews(): Promise<void> {
    this.loading = true;
    this.news = await this.newsService.getAllNews();
    this.loading = false;
  }

  openCreateModal(): void {
    this.editingNews = null;
    this.formData = {
      title: '',
      content: '',
      image_url: '',
      video_url: '',
      published: false,
      publish_date: new Date().toISOString().split('T')[0]
    };
    this.showModal = true;
  }

  openEditModal(newsItem: News): void {
    this.editingNews = newsItem;
    this.formData = { ...newsItem };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.editingNews = null;
  }

  async saveNews(): Promise<void> {
    if (!this.formData.title || !this.formData.content) {
      alert('Veuillez remplir les champs obligatoires');
      return;
    }

    const result = this.editingNews
      ? await this.newsService.updateNews(this.editingNews.id!, this.formData)
      : await this.newsService.createNews(this.formData);

    if (result.success) {
      await this.loadNews();
      this.closeModal();
    } else {
      alert('Erreur: ' + result.error);
    }
  }

  async deleteNews(id: string): Promise<void> {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette actualité ?')) {
      return;
    }

    const result = await this.newsService.deleteNews(id);

    if (result.success) {
      await this.loadNews();
    } else {
      alert('Erreur: ' + result.error);
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
  }
}
