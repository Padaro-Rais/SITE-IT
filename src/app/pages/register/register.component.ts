import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { InscriptionService } from '../../services/inscription.service';
import { GroupeService } from '../../services/groupe.service';
import { VagueService } from '../../services/vague.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  groupes: any[] = [];
  vagues: any[] = [];

  loading = false;
  successMessage = '';
  errorMessage = '';


  showSuccessPopup = false;
  popupTitle = '';
  popupMessage = '';


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private groupeService: GroupeService,
    private vagueService: VagueService,
    private inscriptionService: InscriptionService,
      private router: Router
  ) { }


openSuccessPopup(): void {
  this.popupTitle = '🎉 Inscription réussie';
  this.popupMessage =
    'Votre inscription a été enregistrée avec succès. Veuillez consulter votre boîte mail et suivre les instructions qui vous ont été envoyées afin de finaliser votre inscription.';
  this.showSuccessPopup = true;
}

goHome(): void {
  this.router.navigate(['/']);
}

  closePopup(): void {
    this.showSuccessPopup = false;
  }

  ngOnInit(): void {
    this.initForm();
    this.loadData();
  }

  private initForm(): void {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', Validators.required],

      groupe_id: ['', Validators.required],
      vague_id: ['', Validators.required],
      centre: ['AGOE', Validators.required],
      type_cours: ['jour', Validators.required]
    });
  }

  private loadData(): void {
    forkJoin({
      groupes: this.groupeService.getAll(),
      vagues: this.vagueService.getAll()
    }).subscribe({
      next: (result) => {
        this.groupes = result.groupes.data ?? result.groupes;
        this.vagues = result.vagues.data ?? result.vagues;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  onSubmit(): void {

    this.successMessage = '';
    this.errorMessage = '';

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    const form = this.registerForm.value;

    const userData = {
      nom: form.nom,
      prenom: form.prenom,
      telephone: form.telephone,
      email: form.email,
      password: form.password,
      password_confirmation: form.password_confirmation
    };

    this.authService.register(userData).subscribe({
      next: (response: any) => {

        const userId =
          response.user?.id ??
          response.data?.id ??
          response.id;

        if (!userId) {
          this.loading = false;
          this.errorMessage =
            'Impossible de récupérer l’identifiant utilisateur.';
          return;
        }

        const inscriptionData = {
          user_id: userId,
          groupe_id: form.groupe_id,
          vague_id: form.vague_id,
          centre: form.centre,
          type_cours: form.type_cours
        };

        this.inscriptionService.create(inscriptionData).subscribe({
          next: () => {
            this.loading = false;

            this.successMessage =
              'Votre inscription a été enregistrée avec succès. Veuillez consulter votre boîte mail et suivre les instructions qui vous ont été envoyées afin de finaliser votre inscription.';
            this.openSuccessPopup();
            this.registerForm.reset();

            this.registerForm.patchValue({
              centre: 'AGOE',
              type_cours: 'jour'
            });
          },
          error: (error) => {
            this.loading = false;

            this.errorMessage =
              error.error?.message ||
              'Erreur lors de la création de l’inscription.';

            console.error(error);
          }
        });
      },
      error: (error) => {
        this.loading = false;

        this.errorMessage =
          error.error?.message ||
          'Erreur lors de la création du compte.';

        console.error(error);
      }
    });
  }

  get nom() {
    return this.registerForm.get('nom');
  }

  get prenom() {
    return this.registerForm.get('prenom');
  }

  get telephone() {
    return this.registerForm.get('telephone');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get passwordConfirmation() {
    return this.registerForm.get('password_confirmation');
  }

  get groupeId() {
    return this.registerForm.get('groupe_id');
  }

  get vagueId() {
    return this.registerForm.get('vague_id');
  }
}