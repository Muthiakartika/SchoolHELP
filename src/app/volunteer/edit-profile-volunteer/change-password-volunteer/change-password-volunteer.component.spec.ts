import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordVolunteerComponent } from './change-password-volunteer.component';

describe('ChangePasswordVolunteerComponent', () => {
  let component: ChangePasswordVolunteerComponent;
  let fixture: ComponentFixture<ChangePasswordVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordVolunteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
