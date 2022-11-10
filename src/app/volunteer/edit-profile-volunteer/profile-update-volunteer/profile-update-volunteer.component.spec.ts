import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpdateVolunteerComponent } from './profile-update-volunteer.component';

describe('ProfileUpdateVolunteerComponent', () => {
  let component: ProfileUpdateVolunteerComponent;
  let fixture: ComponentFixture<ProfileUpdateVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUpdateVolunteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileUpdateVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
