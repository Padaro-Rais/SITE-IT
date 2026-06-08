import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      this.contactService.create(this.contactForm.value).subscribe({
        next: () => {
          this.loading = false;
          this.submitted = true;
          this.contactForm.reset();
        },
        error: (error) => {
          this.loading = false;
          this.errorMessage = error.message || 'Une erreur est survenue lors de l\'envoi du message';
        }
      });
    }
  }
}
