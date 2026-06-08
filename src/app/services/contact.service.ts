import { Injectable } from '@angular/core';
import { SupabaseService } from '../core/services/supabase.service';
import { ContactMessage } from '../models';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private tableName = 'contact_messages';

  constructor(private supabase: SupabaseService) {}

  getAll(): Observable<ContactMessage[]> {
    return from(
      this.supabase.client
        .from(this.tableName)
        .select('*')
        .order('created_at', { ascending: false })
    ).pipe(
      map(response => {
        if (response.error) throw response.error;
        return response.data as ContactMessage[];
      })
    );
  }

  create(message: ContactMessage): Observable<ContactMessage> {
    return from(
      this.supabase.client
        .from(this.tableName)
        .insert(message)
        .select()
        .single()
    ).pipe(
      map(response => {
        if (response.error) throw response.error;
        return response.data as ContactMessage;
      })
    );
  }

  markAsRead(id: string): Observable<ContactMessage> {
    return from(
      this.supabase.client
        .from(this.tableName)
        .update({ is_read: true })
        .eq('id', id)
        .select()
        .single()
    ).pipe(
      map(response => {
        if (response.error) throw response.error;
        return response.data as ContactMessage;
      })
    );
  }

  delete(id: string): Observable<void> {
    return from(
      this.supabase.client
        .from(this.tableName)
        .delete()
        .eq('id', id)
    ).pipe(
      map(response => {
        if (response.error) throw response.error;
        return;
      })
    );
  }
}
