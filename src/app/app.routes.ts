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
  {
    path: 'e-comm',
    loadComponent: () =>
      import('./projects/ecom-app/ecom/ecom.component').then(
        (m) => m.EcomComponent
      ),
  },
];
