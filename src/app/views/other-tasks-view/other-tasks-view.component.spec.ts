import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTasksViewComponent } from './other-tasks-view.component';

describe('OtherTasksViewComponent', () => {
  let component: OtherTasksViewComponent;
  let fixture: ComponentFixture<OtherTasksViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherTasksViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherTasksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
