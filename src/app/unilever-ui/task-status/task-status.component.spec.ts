import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTaskStatusComponent } from './task-status.component';

describe('UiTaskStatusComponent', () => {
  let component: UiTaskStatusComponent;
  let fixture: ComponentFixture<UiTaskStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTaskStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTaskStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
