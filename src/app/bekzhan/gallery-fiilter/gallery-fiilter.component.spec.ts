import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFiilterComponent } from './gallery-fiilter.component';

describe('GalleryFiilterComponent', () => {
  let component: GalleryFiilterComponent;
  let fixture: ComponentFixture<GalleryFiilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFiilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFiilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
