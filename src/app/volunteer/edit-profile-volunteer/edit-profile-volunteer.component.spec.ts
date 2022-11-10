import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileVolunteerComponent } from './edit-profile-volunteer.component';

describe('EditProfileVolunteerComponent', () => {
  let component: EditProfileVolunteerComponent;
  let fixture: ComponentFixture<EditProfileVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileVolunteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
