import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true,
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.transform = 'scale(1.03)';
    this.el.nativeElement.style.transition = '0.3s';
    this.el.nativeElement.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.transform = 'scale(1)';
    this.el.nativeElement.style.boxShadow = 'none';
  }
}
