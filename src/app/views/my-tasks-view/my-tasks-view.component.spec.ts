import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTasksViewComponent } from './my-tasks-view.component';

describe('MyTasksViewComponent', () => {
  let component: MyTasksViewComponent;
  let fixture: ComponentFixture<MyTasksViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTasksViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTasksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
