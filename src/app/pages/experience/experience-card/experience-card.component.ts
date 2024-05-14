import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ExperienceInterface } from "../../../shared/data/experience.const";
import { CommonModule } from "@angular/common";
import { CardTiltDirective } from "../../../shared/directives/card-tilt.directive";

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [
    CommonModule,
    CardTiltDirective
  ],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
  @Input() details: ExperienceInterface;

  @ViewChild('card') card?: ElementRef;
}
