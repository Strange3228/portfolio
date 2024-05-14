import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PROJECTS } from "../../shared/data/projects.const";
import { PageTitleComponent } from "../../shared/page-title/page-title.component";
import { ProjectCardComponent } from "./project-card/project-card.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    PageTitleComponent,
    ProjectCardComponent,
    CommonModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = PROJECTS
}
