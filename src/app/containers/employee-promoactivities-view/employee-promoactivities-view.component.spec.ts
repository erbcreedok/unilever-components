import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePromoactivitiesViewComponent } from './employee-promoactivities-view.component';

describe('EmployeePromoactivitiesViewComponent', () => {
  let component: EmployeePromoactivitiesViewComponent;
  let fixture: ComponentFixture<EmployeePromoactivitiesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePromoactivitiesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePromoactivitiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
