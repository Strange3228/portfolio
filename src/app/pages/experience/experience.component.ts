import { Component } from '@angular/core';
import { PageTitleComponent } from "../../shared/page-title/page-title.component";
import { EXPERIENCE } from "../../shared/data/experience.const";
import { CommonModule } from "@angular/common";
import { ExperienceCardComponent } from "./experience-card/experience-card.component";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    PageTitleComponent,
    CommonModule,
    ExperienceCardComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experience = EXPERIENCE;


}
