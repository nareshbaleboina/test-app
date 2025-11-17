import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      (click)="handleClick($event)"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {{ title() }}
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  title = input.required<string>();
  onclick = output<Event>();

  handleClick($event: Event) {
    this.onclick.emit($event);
  }
}
