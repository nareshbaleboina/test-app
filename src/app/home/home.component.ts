import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';
import { RouterLink } from '@angular/router';
import { SubjectComponent } from '../components/subject/subject.component';
import { UnsubscribeComponent } from '../components/unsubscribe/unsubscribe.component';
import { CustomDirectivesComponent } from '../components/custom-directives/custom-directives.component';
import { AppHoverDirective } from '../components/custom-directives/directives/host-binding.directive';
import { InputUpdateDirective } from '../components/custom-directives/directives/property-binding.directive';
import { CustomClassDirective } from '../components/custom-directives/directives/custom-class.directive';

@Component({
  selector: 'app-home',
  imports: [
    GreetingComponent,
    RouterLink,
    SubjectComponent,
    UnsubscribeComponent,
    CustomDirectivesComponent,
    AppHoverDirective,
    InputUpdateDirective,
    CustomClassDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  greetName = signal('Naresh');
}
