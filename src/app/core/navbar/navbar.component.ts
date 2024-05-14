import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  links: {link: string; text: string}[] = [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Projects',
      link: '/projects'
    },
    {
      text: 'Experience',
      link: '/experience'
    }
  ];
  activeLink: string;
}
