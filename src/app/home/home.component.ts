import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  greetName = signal('Naresh');
}
