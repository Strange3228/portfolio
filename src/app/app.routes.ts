import { Routes } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { SingleProjectComponent } from "./pages/projects/single-project/single-project.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'projects/:id',
    loadComponent: () => import('./pages/projects/single-project/single-project.component')
      .then(m => m.SingleProjectComponent),
  }
];
