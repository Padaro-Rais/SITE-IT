import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { EclRegistrationService } from '../../services/ecl-registration.service';
import { EclRegistration } from '../../models';

@Component({
  selector: 'app-ecl-registrations',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './ecl-registrations.component.html',
  styleUrl: './ecl-registrations.component.scss'
})
export class EclRegistrationsComponent implements OnInit {
  registrations: EclRegistration[] = [];
  loading = true;

  constructor(private eclRegistrationService: EclRegistrationService) {}

  ngOnInit(): void {
    this.loadRegistrations();
  }

  loadRegistrations(): void {
    this.loading = true;
    this.eclRegistrationService.getAll().subscribe({
      next: (data) => {
        this.registrations = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  deleteRegistration(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette inscription ?')) {
      this.eclRegistrationService.delete(id).subscribe({
        next: () => {
          this.loadRegistrations();
        }
      });
    }
  }
}
