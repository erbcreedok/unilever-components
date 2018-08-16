import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProverkaDoleiFilterComponent } from './proverka-dolei-filter.component';

describe('ProverkaDoleiFilterComponent', () => {
  let component: ProverkaDoleiFilterComponent;
  let fixture: ComponentFixture<ProverkaDoleiFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProverkaDoleiFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProverkaDoleiFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
