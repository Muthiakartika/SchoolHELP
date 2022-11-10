import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAdminHeadComponent } from './school-admin-head.component';

describe('SchoolAdminHeadComponent', () => {
  let component: SchoolAdminHeadComponent;
  let fixture: ComponentFixture<SchoolAdminHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolAdminHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolAdminHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
