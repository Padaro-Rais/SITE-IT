import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CourseRegistrationService } from '../../services/course-registration.service';
import { EclRegistrationService } from '../../services/ecl-registration.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  courseStats = { total: 0, pending: 0, confirmed: 0 };
  eclStats = { total: 0, pending: 0, confirmed: 0 };

  constructor(
    private courseRegistrationService: CourseRegistrationService,
    private eclRegistrationService: EclRegistrationService
  ) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.courseRegistrationService.getStats().subscribe({
      next: (stats) => {
        this.courseStats = stats;
      }
    });

    this.eclRegistrationService.getStats().subscribe({
      next: (stats) => {
        this.eclStats = stats;
      }
    });
  }
}
