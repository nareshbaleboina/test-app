import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngCustomIf]',
})
export class CustomIfDirective {
  constructor(
    private view: TemplateRef<any>,
    private template: ViewContainerRef
  ) {}

  // Name should be same as the selector
  @Input() set ngCustomIf(condition: boolean) {
    if (condition) {
      this.template.createEmbeddedView(this.view);
    } else {
      this.template.clear();
    }
  }
}
