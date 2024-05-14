import { Component, Input } from '@angular/core';
import { Project } from "../../../shared/data/projects.const";
import { CommonModule, DatePipe } from "@angular/common";
import { CardTiltDirective } from "../../../shared/directives/card-tilt.directive";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule,
    CardTiltDirective
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project: Project;
}
