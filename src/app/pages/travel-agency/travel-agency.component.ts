import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-travel-agency',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './travel-agency.component.html',
  styleUrl: './travel-agency.component.scss'
})
export class TravelAgencyComponent {}
