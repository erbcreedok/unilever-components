import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiGalleryItemComponent } from './ui-gallery-item.component';

describe('UiGalleryItemComponent', () => {
  let component: UiGalleryItemComponent;
  let fixture: ComponentFixture<UiGalleryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiGalleryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiGalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
