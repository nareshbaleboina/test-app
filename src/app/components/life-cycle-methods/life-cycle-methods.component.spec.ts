import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleMethodsComponent } from './life-cycle-methods.component';

describe('LifeCycleMethodsComponent', () => {
  let component: LifeCycleMethodsComponent;
  let fixture: ComponentFixture<LifeCycleMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleMethodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
