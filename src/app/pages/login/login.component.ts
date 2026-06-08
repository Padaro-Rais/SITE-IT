import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SupabaseService } from '../../core/services/supabase.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private supabase = inject(SupabaseService);
  private router = inject(Router);

  email = '';
  password = '';
  loading = false;
  errorMessage = '';

  async onSubmit(): Promise<void> {
    if (!this.email || !this.password) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    try {
      const { error } = await this.supabase.signIn(this.email, this.password);

      if (error) {
        this.errorMessage = 'Email ou mot de passe incorrect';
      } else {
        this.router.navigate(['/admin/dashboard']);
      }
    } catch (error) {
      this.errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
    } finally {
      this.loading = false;
    }
  }
}
