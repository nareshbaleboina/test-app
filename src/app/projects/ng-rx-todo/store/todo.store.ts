import { computed, effect } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

type TodoFilter = 'all' | 'active' | 'completed';

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  todos: TodoItem[];
  filter: TodoFilter;
}

const TODO_STORAGE_KEY = 'naresh-ng-rx-todos';

const initialState: TodosState = {
  todos: [
    { id: 1, title: 'S Todo 1', completed: false },
    { id: 2, title: 'S Todo 2', completed: false },
  ],
  filter: 'all',
};

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ todos, filter }) => ({
    completedTodos: computed(() => todos().filter((t) => t.completed)),
    filteredTodos: computed(() => {
      switch (filter()) {
        case 'active': {
          return todos().filter((t) => !t.completed);
        }
        case 'completed': {
          return todos().filter((t) => t.completed);
        }
        default:
          return todos();
      }
    }),
  })),
  withMethods((store) => ({
    addTodos: (newTodoTitle: string) => {
      const newTodo = { id: Date.now(), title: newTodoTitle, completed: false };
      patchState(store, {
        todos: [newTodo, ...store.todos()],
      });
    },
    toggleTodo: (id: number) => {
      patchState(store, {
        todos: store.todos().map((todo) => {
          if (todo.id == id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      });
    },
    filterTodos: (filter: TodoFilter) => {
      patchState(store, {
        filter,
      });
    },
  })),
  withHooks({
    onInit(store) {
      const prevTodos = JSON.parse(
        localStorage.getItem(TODO_STORAGE_KEY) || '[]'
      );
      patchState(store, {
        todos: prevTodos,
      });
      effect(() => {
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(store.todos()));
      });
    },
  })
);
