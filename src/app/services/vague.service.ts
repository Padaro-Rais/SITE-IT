import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VagueService {

  private apiUrl = `${environment.apiUrl}/vagues-all`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getByGroupe(groupeId: number): Observable<any> {
    return this.http.get(
      `${this.apiUrl}?groupe_id=${groupeId}`
    );
  }
}