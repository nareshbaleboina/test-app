import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[inputUpdater]',
})
export class InputUpdateDirective implements OnInit {
  constructor(
    private element: ElementRef<HTMLInputElement>,
    private renderer2: Renderer2
  ) {}

  // Property binding
  // If this name as the same as selector name we can directly use with in square braces in component
  // It's like alias binding
  @Input('setBackground') backColor: string = '#fff';
  @Input() textColor: string = '#000';

  // disableInput property we are using as the selector name as ailas name
  // If i use the set or get method i can update DOM conditonally by calling as function
  @Input('inputUpdater') set disableInput(isDisabled: boolean) {
    if (isDisabled) {
      this.renderer2.setStyle(
        this.element.nativeElement,
        'cursor',
        'not-allowed'
      );
    }
  }

  @HostBinding('attr.value') inputValue: string = 'Hello there..! check';

  @HostListener('focus') onFocus() {
    console.log('Input Focused::');
  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log('Input event fired:', value);
  }

  ngOnInit() {
    this.renderer2.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.backColor
    );
    this.renderer2.setStyle(
      this.element.nativeElement,
      'color',
      this.textColor
    );
  }
}
