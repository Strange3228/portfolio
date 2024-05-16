import { Injectable } from "@angular/core";
import { PROJECTS } from "../../shared/data/projects.const";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects = PROJECTS;

  getProjectById(id: number) {
    return this.projects.find(project => project.id === id);
  }
}
