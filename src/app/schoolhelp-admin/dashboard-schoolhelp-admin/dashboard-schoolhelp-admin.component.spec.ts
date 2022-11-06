import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSchoolhelpAdminComponent } from './dashboard-schoolhelp-admin.component';

describe('DashboardSchoolhelpAdminComponent', () => {
  let component: DashboardSchoolhelpAdminComponent;
  let fixture: ComponentFixture<DashboardSchoolhelpAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSchoolhelpAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSchoolhelpAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
