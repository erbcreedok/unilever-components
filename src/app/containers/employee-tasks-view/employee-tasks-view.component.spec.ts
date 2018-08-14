import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTasksViewComponent } from './employee-tasks-view.component';

describe('EmployeeTasksViewComponent', () => {
  let component: EmployeeTasksViewComponent;
  let fixture: ComponentFixture<EmployeeTasksViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeTasksViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTasksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
