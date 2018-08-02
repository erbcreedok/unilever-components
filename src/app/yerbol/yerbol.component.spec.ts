import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YerbolComponent } from './yerbol.component';

describe('YerbolComponent', () => {
  let component: YerbolComponent;
  let fixture: ComponentFixture<YerbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YerbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YerbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
