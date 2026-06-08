import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COURSES, CENTERS } from '../../models';
import { CourseRegistrationService } from '../../services/course-registration.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses = COURSES;
  centers = CENTERS;
  registrationForm: FormGroup;
  showForm = false;
  submitted = false;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private courseRegistrationService: CourseRegistrationService
  ) {
    this.registrationForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      center: ['', Validators.required],
      level: ['', Validators.required],
      mode: ['', Validators.required]
    });
  }

  openForm(): void {
    this.showForm = true;
    this.submitted = false;
    this.errorMessage = '';
  }

  closeForm(): void {
    this.showForm = false;
    this.registrationForm.reset();
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      this.courseRegistrationService.create(this.registrationForm.value).subscribe({
        next: () => {
          this.loading = false;
          this.submitted = true;
          this.registrationForm.reset();
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = error.message || 'Une erreur est survenue lors de l\'inscription';
        }
      });
    }
  }

  getCourseTitle(level: string): string {
    const titles: {[key: string]: string} = {
      'A1': 'Allemand A1 - Débutant',
      'A2': 'Allemand A2 - Élémentaire',
      'B1': 'Allemand B1 - Intermédiaire',
      'B2': 'Allemand B2 - Intermédiaire avancé'
    };
    return titles[level] || level;
  }

  getCourseDescription(level: string): string {
    const descriptions: {[key: string]: string} = {
      'A1': 'Niveau débutant - Premiers pas en allemand, communication de base',
      'A2': 'Niveau élémentaire - Conversations quotidiennes et situations courantes',
      'B1': 'Niveau intermédiaire - Communication autonome dans des situations variées',
      'B2': 'Niveau intermédiaire avancé - Expression fluide et spontanée'
    };
    return descriptions[level] || '';
  }
}
