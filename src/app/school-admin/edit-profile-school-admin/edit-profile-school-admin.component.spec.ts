import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileSchoolAdminComponent } from './edit-profile-school-admin.component';

describe('EditProfileSchoolAdminComponent', () => {
  let component: EditProfileSchoolAdminComponent;
  let fixture: ComponentFixture<EditProfileSchoolAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileSchoolAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileSchoolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
