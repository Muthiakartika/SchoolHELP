import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRequestResourceComponent } from './submit-request-resource.component';

describe('SubmitRequestResourceComponent', () => {
  let component: SubmitRequestResourceComponent;
  let fixture: ComponentFixture<SubmitRequestResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitRequestResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitRequestResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
