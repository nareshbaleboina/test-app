import { Component, effect, inject, signal } from '@angular/core';
import { ButtonComponent } from '../ecom-app/components/button/button.component';
import { TodoStore } from './store/todo.store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-rx-todo',
  imports: [ButtonComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './ng-rx-todo.component.html',
  styleUrl: './ng-rx-todo.component.scss',
})
export class NgRxTodoComponent {
  newTodoTitle = signal('');
  store = inject(TodoStore);

  constructor() {
    effect(() => {
      const isAllCompleted = this.store.todos().every((t) => t.completed);
      if (isAllCompleted && this.store.todos().length >= 1) {
        alert('Congratualtions..!, All Tasks are completed.');
      }
    });
  }

  addTodos() {
    if (!this.newTodoTitle().length) {
      alert('Please enter something to add..!');
      return;
    }
    this.store.addTodos(this.newTodoTitle());
    this.newTodoTitle.set('');
  }

  toggleTodo(id: number) {
    this.store.toggleTodo(id);
  }
}
