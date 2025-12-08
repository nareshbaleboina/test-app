# 📘 RxJS in Angular – Complete Guide

This repository contains a complete guide to **RxJS in Angular**, covering core concepts, important operators, multicasting, and real-world examples.

---

# 🧩 1. What is RxJS?

**RxJS (Reactive Extensions for JavaScript)** is a library for handling **asynchronous, event-driven programming** using **Observables**.

Angular relies heavily on RxJS for:

- HTTP Requests
- Form value changes
- Router events
- Component communication
- State management
- Stream-based event handling

---

# 🔑 2. Main Concepts of RxJS

## 2.1 Observable

An **Observable** is a stream of data over time.

### Example 1

```
const obs$ = new Observable(observer => {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});
```

### Example 2 (Angular HTTP)

`this.http.get('/api/users'); // returns Observable`

## 2.2 Observer

The consumer that receives values from an observable.

```
obs$.subscribe({
  next: v => console.log(v),
  error: e => console.error(e),
  complete: () => console.log('Completed')
});
```

## 2.3 Subscription

Starts and stops observable execution.

```
const sub = obs$.subscribe();
sub.unsubscribe();
```

## 2.4 Operators

Functions that transform, filter, combine or control Observables.

Categories include:

- Creation → of, from, defer
- Transformation → map, switchMap, mergeMap
- Combination → merge, combineLatest
- Filtering → filter, take
- Multicasting → share, shareReplay

## 2.5 Subjects

Observables that allow manual emission.

```
const subj$ = new BehaviorSubject(0);
subj$.next(1);
```

## 2.6 Pipe

Used to chain operators.

```
obs$.pipe(
  filter(x => x > 10),
  map(x => x * 2)
);
```

## 2.7 Hot vs Cold Observables

- Type Meaning
- Cold Starts producing values on subscription (HTTP).
- Hot Produces values regardless of subscription (Subjects, DOM events).

# 3. Combination Operators

## 3.1 merge()

Merges multiple Observables and emits values as soon as they arrive.

```
Example 1 – Merge Timers
const fast$ = timer(0, 500);
const slow$ = timer(0, 1000);

merge(fast$, slow$).subscribe(console.log);
Example 2 – Merge Button Clicks
const save$ = fromEvent(saveBtn, 'click');
const cancel$ = fromEvent(cancelBtn, 'click');

merge(save$, cancel$).subscribe(() => console.log('Button clicked'));
```

## 3.2 combineLatest()

Emits latest values from all observables whenever any observable emits.

```
Example 1 – Form Fields
combineLatest([
  this.form.get('email')!.valueChanges,
  this.form.get('password')!.valueChanges
]).subscribe(([email, pass]) => console.log(email, pass));
Example 2 – Dropdown Selections
combineLatest([
  this.countryControl.valueChanges,
  this.stateControl.valueChanges
]).subscribe(([country, state]) =>
  console.log('Selected:', country, state)
);
```

# 4. Transformation Operators

## 4.1 mergeMap()

Executes inner Observables in parallel.
Does NOT cancel previous requests.

```
Example 1 – User detail lookup
this.userId$
  .pipe(mergeMap(id => this.http.get(`/users/${id}`)))
  .subscribe(console.log);
Example 2 – Multiple product price calls
from(products)
  .pipe(mergeMap(p => this.http.get(`/price/${p.id}`)))
  .subscribe(console.log);
```

# 5. Multicasting Operators

## 5.1 share()

Shares the subscription but does not replay old values.

```
Example 1 – Avoid duplicate HTTP calls
const users$ = this.http.get('/users').pipe(share());

users$.subscribe();
users$.subscribe(); // No second HTTP call
Example 2 – Share valueChanges
const values$ = this.form.valueChanges.pipe(share());

values$.subscribe(v => console.log('A:', v));
values$.subscribe(v => console.log('B:', v));
```

## 5.2 shareReplay()

Shares the subscription and replays the last values to new subscribers.
Perfect for API caching.

```
Example 1 – Cache HTTP result
const products$ = this.http.get('/products').pipe(shareReplay(1));

products$.subscribe(); // hits API
products$.subscribe(); // gets cached value
Example 2 – Replay last form value
const form$ = this.form.valueChanges.pipe(shareReplay(1));

form$.subscribe();
setTimeout(() => {
  form$.subscribe(v => console.log('Late:', v));
}, 3000);
```

# Summary:

- merge() → Emits values from multiple streams as they occur
- combineLatest() → Emits combined latest values
- mergeMap() → Parallel async execution, no cancellation
- share() → Prevent duplicate executions, no replay
- shareReplay() → Share + cache last values
