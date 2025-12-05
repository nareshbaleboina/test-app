### Directives

#### Mainly 3 types

- Componental Directive

  - A component is technically a directive with a template.
  - When it is used?
    To create UI blocks (views)
    To create pages, reusable sections, cards, modals etc.
    Key identifiers:
    ✔ Has @Component()
    ✔ Has template or templateUrl
    ✔ Used as element selector <app-user></app-user>

- Attribute Directives

  - They change the appearance or behavior of an element.
  - Example (built-in)
    ngClass
    ngStyle
    ngModel
    ngIf (in Angular v17+ works both as structural & functional)
    ngSwitch
  - What they do?
    Modify DOM style
    Listen to events
    Add/remove classes
    Change behavior of host element

- Structiral Directives

  - They change the DOM structure (add/remove elements).
  - We cannot use two structural directives on the same element (*ngIf, *ngFor)
  - Example (built-in)
    *ngIf
    *ngFor
    *ngSwitchCase
    *ngTemplateOutlet
    @for, @if (new Angular 17+ control flow)
  - What they do?
    Create or destroy DOM elements
    Use the \* shorthand syntax
    Always manipulate templates

### ViewChild

ViewChild decorator is used to query and get a reference of dom element in the component, It returns the FIRST matching element

<input #inputElement />

<!-- .ts file -->
<!-- 2nd argument is optional it will take object {static: true/false, read: } -->

@ViewChild('inputElement') inputRefEl: ElementRef;

we can use inputRefEl.nativeElement.value to get input value

we can pass the element to another component and we can use there as well as a component ref to access all component data

### ViewChildren

ViewChildren decorator is used to query or get a reference of DOM elements in the component,
It returns ALL the matcing elements

### ng-template

- The ng-template is an agular element which wraps an HTML snippet
- This HTMl snippet acts and can be used like a template and can be rendered in the DOM
- If u declare any component inside the <ng-template> component, it will not render by default
- We can render that using diff ways
  - 1.  \*ngTemplateOutlet directive which is `sturctural directive` because it is going to manipulate the DOM
  - 2. Using else condition

```
  <ng-template #referenceVariable>
    <p>Some Content</p>
  </ng-template>
  <div *ngTemplateOutlet="referenceVariable"></div>
```

```
    <button *ngIf="isInStock; else notifyMe">Add to Cart</button>
    <ng-template #notifyMe>
    <button>Notify Me</button>
    </ng-template>
```

### ng-container

=> ng-container is a special Angular Element that can hold sturctural directives without adding new elements to the DOM

```
<div *ngFor="let prod of products">
    <app-product [prod]="prod" *ngIf="prod.name.includes(searchText)" />
</div>
```

- so here in the above code we are creating extra div for looping because we cant use two structural directives in same element
- so instead of `div` we replace with the `ng-container` so it will not create any extra div in the DOM

```
<ng-container *ngFor="let prod of products">
    <app-product [prod]="prod" *ngIf="prod.name.includes(searchText)" />
</ng-container>
```

### ng-content (Content Projection)

- Used to render the content in children component from the parent component directly
- by using `select` attribute we get the content in children component

```
<!-- // Parent Component -->
<app-child>
    <h2 class="header">Some header content</h2>
    <p class="text">Some sample text</p>
</app-child>

<!-- Children component -->
<div>
    <ng-content class="header"></ng-content>
    <div>This is Children component</div>
    <ng-content select="text"></ng-content>
</div>
```

### ContentChild (It's almost same as ViewChild)

- The ContentChild decorator is used to access a reference of a DOM element or Component or directive from the projected content into child component class

```
// parent.html
<div>
    <h1>Header</h1>
    <app-child>
        <h2>Children Header</h2>
        <p #para>Children Content</p>
        <app-test name='test-name'></app-test>
    </app-child>
</div>

child.html
<div>
    <h1>Data from Parent component:</h1>
    <ng-content></ng-contnet>
</div>



// child.ts file
@ContentChild('para') paraEl: ElementRef;

@ContentChild(TestComponent) testEl: TestComponent;

console.log('data::', this.testEl.name, this.paraEl.nativeElement)

```

### ContentChildren (It's same as ViewChildren)

- ContenChildren is used to access the elements from the projected content in child class with all the matching elements

```
@ContentChildren('tempRefVariable') refElements: QueryList<ElementType>

```

#### The main difference between ViewChild and ContentChild

- For the `same compoennt` we use `@ViewChild`
- For the `Proejcted content` we use `@ContentChild`
