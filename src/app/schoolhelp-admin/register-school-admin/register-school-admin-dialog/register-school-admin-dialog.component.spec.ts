import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSchoolAdminDialogComponent } from './register-school-admin-dialog.component';

describe('RegisterSchoolAdminDialogComponent', () => {
  let component: RegisterSchoolAdminDialogComponent;
  let fixture: ComponentFixture<RegisterSchoolAdminDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSchoolAdminDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSchoolAdminDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
