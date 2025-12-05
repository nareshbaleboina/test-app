import { Component } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss',
})
export class SubjectComponent {
  ngOnInit(): void {
    // this.observable()

    // this.subject();

    // this.behaviourSubject();

    // this.replaySubjet();

    this.asyncSubject();
  }

  observable() {
    let obs = new Observable((observer) => {
      observer.next(Math.random());
    });
    // Obeservable is a unicast
    // Each subscriber will get a diff value
    // It does not always emits the same value for its subscribers

    //Subscriber 1
    obs.subscribe((data) => console.log('Sub 1>>>', data));

    //Subscriber 2
    obs.subscribe((data) => console.log('Sub 2>>>', data));
  }

  subject() {
    // Subject
    // Subject is a multicast
    // Same value will be used across its subscribers
    // It emits the same value for its subscribers
    let subject = new Subject();

    subject.subscribe((data) => console.log('Subject subscriber1>>>', data));

    subject.subscribe((data) => console.log('Subject subscriber2>>>', data));

    subject.next(Math.random());

    const url = 'https://randomuser.me/api/';

    const data = ajax(url); // It returns Observble

    // If u use oberserver it will make 3 api calls because its unicast

    // data.subscribe((res) => console.log('API_RES_1:::', res));
    // data.subscribe((res) => console.log('API_RES_2:::', res));
    // data.subscribe((res) => console.log('API_RES_3:::', res));
  }

  behaviourSubject() {
    const sub = new Subject();

    sub.subscribe((res) => console.log('API_RES_1:::', res));
    sub.subscribe((res) => console.log('API_RES_2:::', res));
    sub.subscribe((res) => console.log('API_RES_3:::', res));

    // If u subscribe ajax with suject it will make only one api call bcoz subject is multicast
    // data.subscribe(sub);

    // Behaviour Subject
    const beSub = new BehaviorSubject(100);
    // diff betwn subject and behaviour subject is which accepts an inital value and emits to the subscribers;
    // but whereas subject it only emits if u provide next value
    beSub.subscribe((data) => console.log('BehaviorSubject 1>>>', data)); // 100, 2025
    beSub.subscribe((data) => console.log('BehaviorSubject 2>>>', data)); // 100, 2025

    beSub.next(2025);

    // Behaviour subject emits last emitted value, if there is no last emitted value it will emit initial value
    beSub.subscribe((data) => console.log('BehaviorSubject 3>>>', data)); // 2025
  }

  replaySubjet() {
    const subject = new Subject();

    // Subjet will emits the value after subscription ,
    // so whatever values we have earlier that will not be logged
    // Before subscriptio if u update the data it wont emit
    subject.next(100);
    subject.next(200);
    subject.next(300);

    subject.subscribe((data) => console.log('Sub 1>>>', data));
    subject.subscribe((data) => console.log('Sub 2>>>', data));

    subject.next(400);

    subject.subscribe((data) => console.log('Sub 3>>>', data));
    subject.next(500);
    // above code will print data only after subscription what ever u emitted

    // REPLAY SUBJECT
    // It accepts two arguments bufferSize and window time
    // bufferSize means how many previously emitted data we wanted to store
    // window time- for how long we wanted to store emitted data

    const repSubject = new ReplaySubject();
    // it will emits the old as well new values when new susbcriber adds
    repSubject.next(100);
    repSubject.next(200);
    repSubject.next(300);

    repSubject.subscribe((data) => console.log('Sub 1>>>', data));
    repSubject.subscribe((data) => console.log('Sub 2>>>', data));

    repSubject.next(400);

    repSubject.subscribe((data) => console.log('Sub 3>>>', data));
    repSubject.next(500);
  }

  asyncSubject() {
    // Async subject only passes the last emitted value to all its subscribers
    // once the COMPLETE method calls on it.

    const asyncSubject = new AsyncSubject();

    asyncSubject.next(100);
    asyncSubject.next(200);
    asyncSubject.next(300);
    asyncSubject.complete();

    asyncSubject.next(400);
    // this above line will be ignored as we know that once the complete or error method trigers
    // it will ignore all the next line actions

    asyncSubject.subscribe((data) => console.log('Async Sub 1: ', data)); // 300

    // this will be useful whenever u need only last emitted value before success;
    // if its didn't complete, subscribers won't trigger
  }
}
