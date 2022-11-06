import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRequestAssistanceComponent } from './submit-request-assistance.component';

describe('SubmitRequestAssistanceComponent', () => {
  let component: SubmitRequestAssistanceComponent;
  let fixture: ComponentFixture<SubmitRequestAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitRequestAssistanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitRequestAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
