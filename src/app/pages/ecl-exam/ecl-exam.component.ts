import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CENTERS } from '../../models';
import { EclRegistrationService } from '../../services/ecl-registration.service';

@Component({
  selector: 'app-ecl-exam',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './ecl-exam.component.html',
  styleUrl: './ecl-exam.component.scss'
})
export class EclExamComponent {
  centers = CENTERS;
  registrationForm: FormGroup;
  showForm = false;
  submitted = false;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private eclRegistrationService: EclRegistrationService
  ) {
    this.registrationForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ecl_level: ['', Validators.required],
      exam_center: ['', Validators.required]
    });
  }

  // openForm(): void {
  //   this.showForm = true;
  //   this.submitted = false;
  //   this.errorMessage = '';
  // }

  openForm() {
    window.open('https://exam.eclexam.eu/', '_blank');
  }

  closeForm(): void {
    this.showForm = false;
    this.registrationForm.reset();
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      this.eclRegistrationService.create(this.registrationForm.value).subscribe({
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
}
