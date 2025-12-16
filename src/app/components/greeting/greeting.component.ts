import { Component, input } from '@angular/core';
import { HighlightDirective } from '../custom-directives/directives/host-listener.directive';

@Component({
  selector: 'app-greeting',
  imports: [HighlightDirective],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss',
})
export class GreetingComponent {
  greetMessage = input('Guest');
}
