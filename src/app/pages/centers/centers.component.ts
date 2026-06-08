import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CENTERS } from '../../models';

@Component({
  selector: 'app-centers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './centers.component.html',
  styleUrl: './centers.component.scss'
})
export class CentersComponent {
  centers = CENTERS;
}
