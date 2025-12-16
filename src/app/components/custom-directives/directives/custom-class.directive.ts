import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngCustomClass]',
})
export class CustomClassDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  // alias as selector name
  @Input('ngCustomClass') set display(value: Object) {
    const entries = Object.entries(value);

    for (let item of entries) {
      const [className, condition] = item;
      if (condition) {
        this.renderer.addClass(this.element.nativeElement, className);
      } else {
        this.renderer.removeClass(this.element.nativeElement, className);
      }
    }
  }
}
