import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoactivitiesDonutChartComponent } from './promoactivities-donut-chart.component';

describe('PromoactivitiesDonutChartComponent', () => {
  let component: PromoactivitiesDonutChartComponent;
  let fixture: ComponentFixture<PromoactivitiesDonutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoactivitiesDonutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoactivitiesDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
