import { Injectable, inject } from '@angular/core';
import { SupabaseService } from '../core/services/supabase.service';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private supabase = inject(SupabaseService);

  async getPublishedNews(): Promise<News[]> {
    const { data, error } = await this.supabase.client
      .from('news')
      .select('*')
      .eq('published', true)
      .order('publish_date', { ascending: false });

    if (error) {
      console.error('Error fetching published news:', error);
      return [];
    }

    return data || [];
  }

  async getAllNews(): Promise<News[]> {
    const { data, error } = await this.supabase.client
      .from('news')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching all news:', error);
      return [];
    }

    return data || [];
  }

  async createNews(news: Partial<News>): Promise<{ success: boolean; error?: string }> {
    const { error } = await this.supabase.client
      .from('news')
      .insert([news]);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  }

  async updateNews(id: string, news: Partial<News>): Promise<{ success: boolean; error?: string }> {
    const { error } = await this.supabase.client
      .from('news')
      .update({ ...news, updated_at: new Date().toISOString() })
      .eq('id', id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  }

  async deleteNews(id: string): Promise<{ success: boolean; error?: string }> {
    const { error } = await this.supabase.client
      .from('news')
      .delete()
      .eq('id', id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  }
}
