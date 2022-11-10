import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerHeadComponent } from './volunteer-head.component';

describe('VolunteerHeadComponent', () => {
  let component: VolunteerHeadComponent;
  let fixture: ComponentFixture<VolunteerHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
