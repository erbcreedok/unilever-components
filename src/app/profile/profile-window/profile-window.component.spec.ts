import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWindowComponent } from './profile-window.component';

describe('ProfileWindowComponent', () => {
  let component: ProfileWindowComponent;
  let fixture: ComponentFixture<ProfileWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
