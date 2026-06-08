import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'fr' | 'de';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<Language>('fr');
  public currentLanguage$: Observable<Language> = this.currentLanguageSubject.asObservable();

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  private initLanguage(): void {
    const savedLang = localStorage.getItem('language') as Language;
    const defaultLang: Language = savedLang || 'fr';

    this.translate.setDefaultLang('fr');
    this.translate.use(defaultLang);
    this.currentLanguageSubject.next(defaultLang);
  }

  setLanguage(lang: Language): void {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
    this.currentLanguageSubject.next(lang);
  }

  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  toggleLanguage(): void {
    const newLang: Language = this.getCurrentLanguage() === 'fr' ? 'de' : 'fr';
    this.setLanguage(newLang);
  }
}
