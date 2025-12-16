import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})

/*
    @HostBinding decorator binds a host elements property like style, classes to a property of directive 
    or a component class
*/
export class AppHoverDirective {
  constructor(private element: ElementRef, private renderer2: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = '#888';
  @HostBinding('style.color') color: string = '#000';

  @HostListener('mouseenter') OnMouseEnter() {
    this.backgroundColor = '#fff';
    this.color = '#888';
  }

  @HostListener('mouseout') OnMouseOut() {
    this.backgroundColor = '#888';
    this.color = '#000';
  }
}
