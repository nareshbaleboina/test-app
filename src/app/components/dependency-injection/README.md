# Dependency Injection (DI)

- Dependency Injection is design pattern where a class does not create its own dependencies, but instead recives it from the external source

#### Without DI (Bad Practice)

```
class UserComponent {
  private userService = new UserService(); // tightly coupled
}
```

Problems:

- Hard to test
- Tightly coupled
- Cannot swap implementations

#### With DI (Angular Way)

```
class UserComponent {
  constructor(private userService: UserService) {}
}
```

Benefits:

- Loose coupling
- Easier testing (mocking)
- Better maintainability
- Centralized dependency management

### Core Concepts in Angular DI:

Angular DI is based on three main concepts
| Concept | Description |
| -------------- | ------------------------------------------ |
| **Injector** | Creates and manages dependencies |
| **Provider** | Tells Angular _how_ to create a dependency |
| **Dependency** | The service or object being injected |

## What is an Injector?

An Injector is responsible for:

- Creating instances of dependencies.
- Caching instances (Signleton behaviour)
- Providing them to components/services when requested
  Angualr has a hierarchical injecting system

## Providers - How Depedencies are created

A Provider is a configuration object that tells how to create or supply a dependency

### Common Provider types

#### useClass

- Most common usage.

```
providers: [
  { provide: LoggerService, useClass: LoggerService }
]
```

#### useValue

- Used for constant or configuration values

```
providers: [
  { provide: 'API_URL', useValue: 'https://api.example.com' }
]

constructor(@Inject('API_URL') private apiUrl: string) {}
```

#### useExisting

- Alias for another provider

```
providers: [
  LoggerService,
  { provide: OldLoggerService, useExisting: LoggerService }
]
```

#### useFactory

- Used when creation logic is dynamic

```
providers: [
  {
    provide: AuthService,
    useFactory: (http: HttpClient) => {
      return new AuthService(http);
    },
    deps: [HttpClient]
  }
]
```

## @Injectable() Decorator

- Marks a class as availble for DI

```
@Injectable()
export class UserService {}
```

- `providedIn` (Tree shakable providers)

```
@Injectable({
  providedIn: 'root'
})
export class UserService {}
```

**Benefits**

- Singleton across the app
- Automatically removed if unused
- Recommended approach ✅

## Where providers can be registered

#### Root injector

`@Injectable({ providedIn: 'root' })`

- Single instance for entire app

#### Module Level

```
@NgModule({
  providers: [UserService]
})
export class UserModule {}
```

- Instance shared across module

#### Component level

```
@Component({
  selector: 'app-user',
  providers: [UserService]
})
```

- ⚠ Creates new instance per component

## Hiearchical Dependencey Injection

- Angular injects form a tree structure

Root Injector
├── Module Injector
│ ├── Component Injector
│ │ └── Child Component Injector

_Rule:_

- Angualr Searches from child -> parent -> root until it finds a provider

**Example**

```
@Component({
  providers: [UserService]
})
export class ParentComponent {}

@Component({})
export class ChildComponent {
  constructor(private userService: UserService) {}
}
```

- ➡ Child gets the Parent’s instance, not root.

## Dependency Injection in Services:

- Services can inject other services
- Angular resolves dependecies recursively.

```
@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient) {}
}
```

## Injection Tokens

- Used when Injecting
- Interfaces
- Strings
- Config Objects

#### Creating an Injection Token

```
export const CONFIG_TOKEN = new InjectionToken<AppConfig>('config');
providers: [
  { provide: CONFIG_TOKEN, useValue: { apiUrl: 'test' } }
]

// Usage
constructor(@Inject(CONFIG_TOKEN) private config: AppConfig) {}

```

## Optional Dependencies

`constructor(@Optional() private logger?: LoggerService) {}`

- If provider doesn’t exist → null instead of error.

## @Self, @SkipSelf, @Host

### @Self()

- Only checks current injector
  `constructor(@Self() private service: MyService) {} //Current component only`

### @SkipSelf()

- Skips current injector
  `constructor(@SkipSelf() private service: MyService) {}`

### @Host()

- Stops at host component.

## Multi Providers

- Used when multiple values are needed for the same token
- Angular injects them as an array

```
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
]
```

## Dependency Injection & Testing

- Mocking Services
- Makes unit testing easy

```
TestBed.configureTestingModule({
  providers: [
    { provide: UserService, useValue: mockUserService }
  ]
});
```

## Common Mistakes

- Providing services in components unnecessarily
- Using string tokens instead of InjectionToken
- Forgetting multi: true
- Creating services using new

## Best Practices

- Use `providedIn : 'root'`
- Keep services stateless where possible
- Use InjectToken for configs
- Avoid component level providers unless required
- Use factory proviers for environment based logic
