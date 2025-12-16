import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef, private rendrer2: Renderer2) {}

  // We can listen to elements on Host element
  // Host element is nothing but the element where the selecter is added/injected
  @HostListener('mouseenter') OnMouseEnter() {
    this.rendrer2.addClass(this.element.nativeElement, 'mouse-enter');
    this.rendrer2.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  /*
    - Create a function first
    - Decorate with the @HostListener decorator
    - Pass the event name that u want to listen
  */

  @HostListener('mouseout', ['$event']) OnMosueOut(event: Event) {
    this.rendrer2.removeClass(this.element.nativeElement, 'mouse-enter');
    this.rendrer2.setStyle(this.element.nativeElement, 'cursor', 'normal');
  }
}
