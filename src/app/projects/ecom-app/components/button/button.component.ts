import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  template: `
    <button
      [disabled]="disabled()"
      (click)="handleClick($event)"
      [ngClass]="[
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-1',
        class(),
        disabled()
          ? 'bg-gray-200 opacity-50 hover:bg-gray-200 cursor-not-allowed'
          : 'cursor-pointer'
      ]"
    >
      {{ title() }}
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  title = input.required<string>();
  onclick = output<Event>();
  disabled = input<boolean>(false);
  class = input<string>('');

  handleClick($event: Event) {
    this.onclick.emit($event);
  }
}
