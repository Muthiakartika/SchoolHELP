import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSchoolDialogComponent } from './register-school-dialog.component';

describe('RegisterSchoolDialogComponent', () => {
  let component: RegisterSchoolDialogComponent;
  let fixture: ComponentFixture<RegisterSchoolDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSchoolDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSchoolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
