import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSchoolAdminComponent } from './register-school-admin.component';

describe('RegisterSchoolAdminComponent', () => {
  let component: RegisterSchoolAdminComponent;
  let fixture: ComponentFixture<RegisterSchoolAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSchoolAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSchoolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
