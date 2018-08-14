import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCheckPartsViewComponent } from './employee-check-parts-view.component';

describe('EmployeeCheckPartsViewComponent', () => {
  let component: EmployeeCheckPartsViewComponent;
  let fixture: ComponentFixture<EmployeeCheckPartsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeCheckPartsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCheckPartsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
