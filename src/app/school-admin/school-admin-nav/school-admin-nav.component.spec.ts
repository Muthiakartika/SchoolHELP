import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAdminNavComponent } from './school-admin-nav.component';

describe('SchoolAdminNavComponent', () => {
  let component: SchoolAdminNavComponent;
  let fixture: ComponentFixture<SchoolAdminNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolAdminNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolAdminNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
