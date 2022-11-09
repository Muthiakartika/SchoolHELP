import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolhelpAdminNavComponent } from './schoolhelp-admin-nav.component';

describe('SchoolhelpAdminNavComponent', () => {
  let component: SchoolhelpAdminNavComponent;
  let fixture: ComponentFixture<SchoolhelpAdminNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolhelpAdminNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolhelpAdminNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
