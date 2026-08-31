import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Newsletter {

    private apiUrl = 'https://apiit.itlaacademy.com/api/newsletter';

  constructor(private http: HttpClient) {}

  subscribe(email: string) {
    return this.http.post(this.apiUrl, { email });
  }
  
}
