import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolhelpAdminHeadComponent } from './schoolhelp-admin-head.component';

describe('SchoolhelpAdminHeadComponent', () => {
  let component: SchoolhelpAdminHeadComponent;
  let fixture: ComponentFixture<SchoolhelpAdminHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolhelpAdminHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolhelpAdminHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
