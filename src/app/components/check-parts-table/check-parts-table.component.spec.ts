import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPartsTableComponent } from './check-parts-table.component';

describe('CheckPartsTableComponent', () => {
  let component: CheckPartsTableComponent;
  let fixture: ComponentFixture<CheckPartsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPartsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPartsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
