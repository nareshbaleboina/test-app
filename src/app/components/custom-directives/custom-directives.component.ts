import { Component, ViewEncapsulation } from '@angular/core';
import { SetBackground } from './directives/set-background.directive';
import { CommonModule } from '@angular/common';
import { CustomIfDirective } from './directives/if.directive';

@Component({
  selector: 'app-custom-directives',
  imports: [SetBackground, CommonModule, CustomIfDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.scss',
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomDirectivesComponent {
  display: boolean = false;
  tab: string = '';
}
