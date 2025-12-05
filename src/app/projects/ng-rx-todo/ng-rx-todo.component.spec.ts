import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxTodoComponent } from './ng-rx-todo.component';

describe('NgRxTodoComponent', () => {
  let component: NgRxTodoComponent;
  let fixture: ComponentFixture<NgRxTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRxTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgRxTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
