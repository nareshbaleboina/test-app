import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ButtonComponent } from '../../projects/ecom-app/components/button/button.component';

@Component({
  selector: 'app-unsubscribe',
  imports: [ButtonComponent],
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.scss',
})
export class UnsubscribeComponent {
  counter = interval(1000); // interval delay here 1 sec
  subscriber1: Subscription | undefined;
  data: number[] = [];

  onSubscribe() {
    this.subscriber1 = this.counter.subscribe((val) => {
      this.data.push(val);
    });
  }

  unSubscribe() {
    this.subscriber1?.unsubscribe();
  }
}
