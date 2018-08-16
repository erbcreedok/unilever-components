import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiChartLegendsComponent } from './ui-chart-legends.component';

describe('UiChartLegendsComponent', () => {
  let component: UiChartLegendsComponent;
  let fixture: ComponentFixture<UiChartLegendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiChartLegendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiChartLegendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
