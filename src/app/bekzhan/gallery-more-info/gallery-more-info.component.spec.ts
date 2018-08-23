import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMoreInfoComponent } from './gallery-more-info.component';

describe('GalleryMoreInfoComponent', () => {
  let component: GalleryMoreInfoComponent;
  let fixture: ComponentFixture<GalleryMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryMoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
