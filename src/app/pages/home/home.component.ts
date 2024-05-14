import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";

import { SOCIAL_LINKS } from "../../shared/data/social-links.const";
import { BypassHtmlSanitizerPipe } from "../../shared/pipes/bypas-html-sanitizer.pipe";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, BypassHtmlSanitizerPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  timestamp: number = Date.now();
  socialLinks = SOCIAL_LINKS;
}
