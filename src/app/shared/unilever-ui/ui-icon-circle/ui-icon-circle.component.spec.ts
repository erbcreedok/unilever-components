import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiIconCircleComponent } from './ui-icon-circle.component';

describe('UiIconCircleComponent', () => {
  let component: UiIconCircleComponent;
  let fixture: ComponentFixture<UiIconCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiIconCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiIconCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
