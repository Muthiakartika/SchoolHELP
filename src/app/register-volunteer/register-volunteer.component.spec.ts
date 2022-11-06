import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVolunteerComponent } from './register-volunteer.component';

describe('RegisterVolunteerComponent', () => {
  let component: RegisterVolunteerComponent;
  let fixture: ComponentFixture<RegisterVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterVolunteerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
