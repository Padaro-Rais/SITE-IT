import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CourseRegistrationService } from '../../services/course-registration.service';
import { CourseRegistration } from '../../models';

@Component({
  selector: 'app-course-registrations',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './course-registrations.component.html',
  styleUrl: './course-registrations.component.scss'
})
export class CourseRegistrationsComponent implements OnInit {
  registrations: CourseRegistration[] = [];
  loading = true;

  constructor(private courseRegistrationService: CourseRegistrationService) {}

  ngOnInit(): void {
    this.loadRegistrations();
  }

  loadRegistrations(): void {
    this.loading = true;
    this.courseRegistrationService.getAll().subscribe({
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
      this.courseRegistrationService.delete(id).subscribe({
        next: () => {
          this.loadRegistrations();
        }
      });
    }
  }
}
