import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoactivitiesBarChartComponent } from './promoactivities-bar-chart.component';

describe('PromoactivitiesBarChartComponent', () => {
  let component: PromoactivitiesBarChartComponent;
  let fixture: ComponentFixture<PromoactivitiesBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoactivitiesBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoactivitiesBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
