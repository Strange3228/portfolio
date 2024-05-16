import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from "../../../shared/data/projects.const";
import { ProjectsService } from "../projects.service";
import { CommonModule } from "@angular/common";
import { PhotoGalleryModule } from "@twogate/ngx-photo-gallery";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [
    CommonModule,
    PhotoGalleryModule,
    RouterModule
  ],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent implements OnInit, OnDestroy {
  project: Project | undefined = undefined;
  routeSubscription: Subscription;

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.project = this.projectsService.getProjectById(parseInt(params['id']));
    })
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
