import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { CENTERS } from '../../models';
import { EclRegistrationService } from '../../services/ecl-registration.service';


interface ExamSession {
  month: string;
  year: number;

  examDate: string;

  registration: string;

  levels: string[];

  status:
    | 'finished'
    | 'current'
    | 'upcoming';

  current?: boolean;
}


interface SessionStatus {
  label: string;
  class: string;
}


@Component({
  selector: 'app-ecl-exam',
  standalone: true,

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],

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


  /*
   * =====================================================
   * CALENDRIER RÉEL DES SESSIONS ECL 2026
   * =====================================================
   *
   * Février supprimé.
   *
   * A2 uniquement disponible en avril.
   *
   * C1 supprimé.
   *
   * Avril : session terminée
   * Juin : session terminée
   * Août : session terminée
   * Septembre : session en cours / inscriptions clôturées
   * Novembre : inscriptions pas encore lancées
   */

  examSessions: ExamSession[] = [

    {
      month: 'AVRIL',
      year: 2026,

      examDate:
        '17 AVRIL – 30 AVRIL 2026',

      registration:
        '28 JANVIER 2026 – 15 MARS 2026',

      levels: [
        'A2',
        'B1',
        'B2'
      ],

      status: 'finished'
    },


    {
      month: 'JUIN',
      year: 2026,

      examDate:
        '12 JUIN – 15 JUIN 2026',

      registration:
        '08 AVRIL – 14 MAI 2026',

      levels: [
        'B1',
        'B2'
      ],

      status: 'finished'
    },


    {
      month: 'AOÛT',
      year: 2026,

      examDate:
        '04 AOÛT – 18 AOÛT 2026',

      registration:
        '04 JUIN 2026 – 10 JUILLET 2026',

      levels: [
        'B1',
        'B2'
      ],

      status: 'finished'
    },


    {
      month: 'SEPTEMBRE',
      year: 2026,

      examDate:
        '22 SEPTEMBRE – 11 OCTOBRE 2026',

      registration:
        '29 JUILLET 2026 – 27 AOÛT 2026',

      levels: [
        'B1',
        'B2'
      ],

      status: 'current',

      current: true
    },


    {
      month: 'NOVEMBRE',
      year: 2026,

      examDate:
        '27 NOVEMBRE – 11 DÉCEMBRE 2026',

      registration:
        '16 SEPTEMBRE 2026 – 27 OCTOBRE 2026',

      levels: [
        'B1',
        'B2'
      ],

      status: 'upcoming'
    }

  ];


  constructor(
    private fb: FormBuilder,
    private eclRegistrationService: EclRegistrationService
  ) {

    this.registrationForm = this.fb.group({

      first_name: [
        '',
        Validators.required
      ],

      last_name: [
        '',
        Validators.required
      ],

      phone: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      ecl_level: [
        '',
        Validators.required
      ],

      exam_center: [
        '',
        Validators.required
      ]

    });

  }


  /**
   * =====================================================
   * OUVRIR LA PLATEFORME ECL
   * =====================================================
   */
  openForm(): void {

    window.open(
      'https://exam.eclexam.eu/',
      '_blank'
    );

  }


  /**
   * =====================================================
   * FERMER LE MODAL
   * =====================================================
   */
  closeForm(): void {

    this.showForm = false;

    this.registrationForm.reset();

    this.submitted = false;

    this.errorMessage = '';

  }


  /**
   * =====================================================
   * STATUT DES SESSIONS
   * =====================================================
   */
  getSessionStatus(
    session: ExamSession
  ): SessionStatus {

    switch (session.status) {

      case 'finished':

        return {
          label: 'SESSION TERMINÉE',
          class: 'finished'
        };


      case 'current':

        return {
          label: 'INSCRIPTIONS CLÔTURÉES',
          class: 'current'
        };


      case 'upcoming':

        return {
          label: 'INSCRIPTIONS BIENTÔT',
          class: 'upcoming'
        };


      default:

        return {
          label: 'INFORMATION',
          class: 'upcoming'
        };

    }

  }


  /**
   * =====================================================
   * SOUMISSION DU FORMULAIRE
   * =====================================================
   */
  onSubmit(): void {

    if (this.registrationForm.invalid) {

      this.registrationForm.markAllAsTouched();

      return;

    }


    this.loading = true;

    this.errorMessage = '';


    this.eclRegistrationService
      .create(this.registrationForm.value)
      .subscribe({

        next: () => {

          this.loading = false;

          this.submitted = true;

          this.registrationForm.reset();

        },

        error: (error) => {

          this.loading = false;

          this.errorMessage =
            error.message ||
            'Une erreur est survenue lors de l\'inscription.';

        }

      });

  }

}