import { Component } from '@angular/core';
import { SetBackground } from './directives/set-background.directive';

@Component({
  selector: 'app-custom-directives',
  imports: [SetBackground],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.scss',
})
export class CustomDirectivesComponent {}
