import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]', // as it's a attribute directive we need to wrap it in a square brackets
})
export class SetBackground implements OnInit {
  // private element: ElementRef
  // private renderer: Renderer2 // we are declaring the variable directly in constructor

  constructor(private element: ElementRef, private renderer: Renderer2) {
    // this is not the best way to update DOM in constuctor
    // bcoz what we learn in the life cycle hooks is like constuructor will be called to instantiate the class, at the time properties are not defined
    // so we use OnInit lifeCycleHook
    // element.nativeElement.style.background = 'red';
    // this.renderer = renderer
  }
  ngOnInit(): void {
    this.element.nativeElement.style.background = '#666';
    this.element.nativeElement.style.padding = '5px 10px';
    // Updating DOM directly like this is a not advisble
    /*
    1. - Angular keeps the component & view in sync using templates, data binding and change detection etc
       - All of them are bypassed when we update the DOM directly
    2. - The DOM manipulation works only in browsers
       - You will not be able to use in other platforms like 
         - web workers, 
         - servers for server side rendering
         - desktop or mobile apps etc, where there is no browser
    3. - The DOM api's doesn't sanitize the data, Hence it is possible to inject a script
       - thereby, Opening our app an easy target for the XSS injection attacks
    */

    // Renderer2
    /*
     - It allows us to manipulate the DOM without accessing the DOM elements directly
     - By providing a layer of abstraction between the DOM element and the component code
    */
    // 3 arguments  DOM ref, property name, property value
    this.renderer.setStyle(this.element.nativeElement, 'background', '#888');
    this.renderer.setStyle(this.element.nativeElement, 'color', '#000');
    this.renderer.setAttribute(
      this.element.nativeElement,
      'title',
      'This is test value'
    );
    /*
     - By using Renderer2 we are not updating the DOM directly, we are adding only abstraction layer then updating
    */
  }
}
