import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BekzhanComponent } from './bekzhan.component';

describe('BekzhanComponent', () => {
  let component: BekzhanComponent;
  let fixture: ComponentFixture<BekzhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BekzhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BekzhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
