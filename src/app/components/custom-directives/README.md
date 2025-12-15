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
