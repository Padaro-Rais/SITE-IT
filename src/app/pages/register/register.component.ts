import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SupabaseService } from '../../core/services/supabase.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  private supabase = inject(SupabaseService);
  private router = inject(Router);

  email = '';
  password = '';
  confirmPassword = '';
  loading = false;
  errorMessage = '';
  successMessage = '';

  async onSubmit(): Promise<void> {
    if (!this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Le mot de passe doit contenir au moins 6 caractères';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    try {
      const { error } = await this.supabase.signUp(this.email, this.password);

      if (error) {
        this.errorMessage = error.message || 'Une erreur est survenue lors de l\'inscription';
      } else {
        this.successMessage = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }
    } catch (error) {
      this.errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
    } finally {
      this.loading = false;
    }
  }
}
