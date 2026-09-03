



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-courepre',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './courepre.html',
  styleUrl: './courepre.css',
})
export class Courepre {

  registrationForm: any;

  isSubmitting = false;

  constructor(
    private fb: FormBuilder
  ) {

    this.registrationForm = this.fb.group({

      nom: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],

      telephone: [
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],

      email: [
        '',
        [
          Validators.email
        ]
      ],

      niveau: [
        '',
        Validators.required
      ],

      session: [
        '',
        Validators.required
      ],

      message: [
        ''
      ],

      conditions: [
        false,
        Validators.requiredTrue
      ]

    });

  }


  onSubmit(): void {

    if (this.registrationForm.invalid) {

      this.registrationForm.markAllAsTouched();

      return;
    }


    this.isSubmitting = true;


    const formData = this.registrationForm.value;

    console.log('Inscription :', formData);


    /*
     * Ici tu pourras appeler ton API :
     *
     * this.inscriptionService.create(formData).subscribe({
     *
     *   next: (response) => {
     *
     *      this.isSubmitting = false;
     *
     *      this.registrationForm.reset();
     *
     *   },
     *
     *   error: (error) => {
     *
     *      this.isSubmitting = false;
     *
     *   }
     *
     * });
     */


    setTimeout(() => {

      this.isSubmitting = false;

      alert(
        'Votre demande d’inscription a bien été envoyée. Notre équipe vous contactera prochainement.'
      );

      this.registrationForm.reset();

    }, 1000);

  }

}


