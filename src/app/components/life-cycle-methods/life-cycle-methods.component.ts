import { Component } from '@angular/core';

@Component({
  selector: 'app-life-cycle-methods',
  imports: [],
  templateUrl: './life-cycle-methods.component.html',
  styleUrl: './life-cycle-methods.component.scss',
})
export class LifeCycleMethodsComponent {
  constructor() {
    console.log('Constructor initialized');
  }
}
