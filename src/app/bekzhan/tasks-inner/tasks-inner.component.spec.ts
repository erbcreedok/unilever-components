import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksInnerComponent } from './tasks-inner.component';

describe('TasksInnerComponent', () => {
  let component: TasksInnerComponent;
  let fixture: ComponentFixture<TasksInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
