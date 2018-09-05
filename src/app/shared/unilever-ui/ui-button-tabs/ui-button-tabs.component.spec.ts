import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButtonTabsComponent } from './ui-button-tabs.component';

describe('UiButtonTabsComponent', () => {
  let component: UiButtonTabsComponent;
  let fixture: ComponentFixture<UiButtonTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiButtonTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiButtonTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
