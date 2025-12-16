### Directives FLOW

- Whenever u call the selector on the DOM element , new instance of this directive will be initalized
- to create the instance, constuctor will be called
- Once the instance is created, the reference of that element injected into the constructor of Directive Class, this is called Dependencey Injection
- now we have that Element reference
- so if u use directly it wont work, bcoz angular doesnt know about this directive
- so for that u need to register this module in app.module file or import it into its .ts file

### Renderer2

- It allows us to manipulate the DOM without accessing the DOM elements directly
- By providing a layer of abstraction between the DOM element and the component code
- It accepts 3 arguments: DOM ref, property name, property value

### @HostListener

### View Encapsulation

- The View Encapsulation is a concept or behaviour in Angular, where component styles are encapsulated into the components view and do not effect the rest of the application

#### To achieve this angular has 3 types view encapsulation

- ViewEncapsulation.None
- ViewEncpsulated.Emulated // by default one
- ViewEncapuslation.ShadowDOM

- So for every component it will create a unique id , we can see that by inspecting the code

#### ViewEncapuslation.None

- In the component decorator if u mention `encapuslaion: ViewEncapsulation.None`, no encapuslation will be applied to its children, so that parent componeent styles will be applied to the children comps as well without adding a unique key to its children

#### ViewEncapsulation.ShadowDOM

- If u mention ur component as `encapsulation: ViewEncapsulation.ShadowDOM`
- Browser will create it's own shadow DOM by keeping main DOM seperate, means none of the styles will be applied from the outside like Global styles also will not apply
- becuase of that styles of that component stay private and does not get affected by other styles
