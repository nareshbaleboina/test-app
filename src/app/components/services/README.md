# Service

- A Service in Angulat is a typescript class that can be used in multiple components across our Angular application

**Why we need services**

- For example, u have a web page, where header, body and some other page is rendering on the DOM
- Each compoenent has seperatic logic for Subscibe button but the logic is same
- Same code is repeated in three different component, we are violating DRY principle
- Component class should only be responsible for representing UI to the User
- Presentation logic must be seperate from the UI logic to make components more maintainable

**Advantages**

- Services allows us to re-use the piece of code in multiple components,in this way we avoid repeating a piece of code
- It allows us to seperate UI logic from the business logic
- We can test the business logic without creating the Component
- We can also use services to communicate betweeen two non-related components

#### Creation

- `ng generate service services/serviceName`
- It will create a file with in the services folder
- Declare a class with export

// Service.ts file

- `export class TestService {}`

//Comp.ts

```

onClick() {
    // Creating a new instance of the testservice class
    let testService = new TestService();
    testService.clickedFunc()
}
```
