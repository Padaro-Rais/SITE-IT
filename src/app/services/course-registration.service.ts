import { Injectable } from '@angular/core';
import { SupabaseService } from '../core/services/supabase.service';
import { CourseRegistration } from '../models';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseRegistrationService {
  private tableName = 'course_registrations';

  constructor(private supabase: SupabaseService) {}

  getAll(): Observable<CourseRegistration[]> {
    return from(
      this.supabase.client
        .from(this.tableName)
        .select('*')
        .order('created_at', { ascending: false })
    ).pipe(
      map(response => {
        if (response.error) throw response.error;
        return response.data as CourseRegistration[];
      })
    );
  }

  create(registration: CourseRegistration): Observable<CourseRegistration> {
    return from(
      this.supabase.client
        .from(this.tableName)
        .insert(registration)
        .select()
        .single()
    ).pipe(
      map(response => {
        if (response.error) throw response.error;
        return response.data as CourseRegistration;
      })
    );
  }

  update(id: string, updates: Partial<CourseRegistration>): Observable<CourseRegistration> {
    return from(
      this.supabase.client
        .from(this.tableName)
        .update(updates)
        .eq('id', id)
        .select()
        .single()
    ).pipe(
      map(response => {
        if (response.error) throw response.error;
        return response.data as CourseRegistration;
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

  getStats(): Observable<{ total: number; pending: number; confirmed: number }> {
    return this.getAll().pipe(
      map(registrations => ({
        total: registrations.length,
        pending: registrations.filter(r => r.status === 'pending').length,
        confirmed: registrations.filter(r => r.status === 'confirmed').length
      }))
    );
  }
}
