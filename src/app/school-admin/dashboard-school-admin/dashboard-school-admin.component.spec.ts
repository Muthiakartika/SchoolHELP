import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSchoolAdminComponent } from './dashboard-school-admin.component';

describe('DashboardSchoolAdminComponent', () => {
  let component: DashboardSchoolAdminComponent;
  let fixture: ComponentFixture<DashboardSchoolAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSchoolAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSchoolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
