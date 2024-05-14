import { Directive, ElementRef, HostListener, OnInit } from "@angular/core";

@Directive({
  standalone: true,
  selector: '[appCardTilt]'
})
export class CardTiltDirective implements OnInit {
  boundingRect: DOMRect | null = null;

  glareColors = [
    'radial-gradient(circle, rgba(255, 0, 0, 0.14) 27%, rgba(213,24,24,0) 59%)',
    'radial-gradient(circle, rgba(0, 51, 255, 0.14) 27%, rgba(24, 71, 213, 0) 59%)',
    'radial-gradient(circle, rgba(255, 217, 0, 0.14) 27%, rgba(213, 191, 24, 0) 59%)',
    'radial-gradient(circle, rgba(13, 255, 0, 0.14) 27%, rgba(81, 213, 24, 0) 59%)'
  ];

  constructor(
    private elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    const hostElement = this.elementRef.nativeElement as HTMLElement;
    const randomIndex = Math.floor(Math.random() * this.glareColors.length);
    hostElement.style.setProperty('--glare-color', this.glareColors[randomIndex]);
  }

  @HostListener('mouseenter', ['$event'])
  startAnimation(event: MouseEvent) {
    this.boundingRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  }

  @HostListener('mouseleave')
  endAnimation() {
    this.boundingRect = null;
  }

  @HostListener('mousemove', ['$event'])
  animateCardOnMouseMove(event: MouseEvent) {
    if (!this.boundingRect) return;
    const x = event.clientX - this.boundingRect.left;
    const y = event.clientY - this.boundingRect.top;
    const xPercentage = x / this.boundingRect.width;
    const yPercentage = y / this.boundingRect.height;
    const xRotation = (xPercentage - 0.5) * 20;
    const yRotation = (0.5 - yPercentage) * 20;

    (event.currentTarget as HTMLElement).style.setProperty('--x-rotation', `${yRotation}deg`);
    (event.currentTarget as HTMLElement).style.setProperty('--y-rotation', `${xRotation}deg`);
    (event.currentTarget as HTMLElement).style.setProperty('--x-cursor', `${xPercentage * 100}%`);
    (event.currentTarget as HTMLElement).style.setProperty('--y-cursor', `${yPercentage * 100}%`);
  }
}
