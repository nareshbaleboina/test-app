import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'todos',
    loadComponent: () =>
      import('./projects/todo-app/todos/todos.component').then(
        (m) => m.TodosComponent
      ),
  },
  // E-Commerce Routes
  {
    path: 'e-comm',
    loadComponent: () =>
      import('./projects/ecom-app/ecom/ecom.component').then(
        (m) => m.EcomComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./projects/ecom-app/pages/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./projects/ecom-app/pages/cart/cart.component').then(
            (m) => m.CartComponent
          ),
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('./projects/ecom-app/pages/checkout/checkout.component').then(
            (m) => m.CheckoutComponent
          ),
      },
    ],
  },
  //NgRx-TODO
  {
    path: 'ngrx-todo',
    loadComponent: () =>
      import('./projects/ng-rx-todo/ng-rx-todo.component').then(
        (m) => m.NgRxTodoComponent
      ),
  },
];
