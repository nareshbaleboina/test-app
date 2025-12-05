### Angular Compliation Flow

- Whenever the Angular component encouters a selector
- It will instantiate the class of
- Calls the constructor
- When a constructor is called, by that time none of its input properties are updated and not available to use.
- When a constructor is called, by that time the child components of that component are not yet consructed
- Projected contents are also not availble by the time the constuctor of a component is called.
- Once the component is removed from the DOM , that we can say the component is destroyed

## FLOW from Component Creation to Destroy

- 1. When the Angular application starts, it first creates and renders the root component
- 2. Then It Creates and renders its children and their children, In this way it forms a tree of components
- 3. Once angular loads the component, It starts the process of rendering the view. To do that, it needs to check the
  - Input properties
  - Evaluate the data bindings
  - Expressions
  - Render the projected content etc
- 4. Angular then also removes the component from the DOM when its no longer needed
- 5. And Angular let us know when these events happen, using angular life cycle hooks

#### The Angular life cycle hooks are the methods that angular invokes on a directive or component, as it creates , changes and destroys them.

##### LifeCycleHooks

- ngOnChanges
- ngOnInIt
- ngDoCheck
- ngAfterContentOnInIt
- ngAfterContentChecked
- ngAfterViewInit
- ngAfterViewChecked
- ngDestroy
