import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitOfferComponent } from './submit-offer.component';

describe('SubmitOfferComponent', () => {
  let component: SubmitOfferComponent;
  let fixture: ComponentFixture<SubmitOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
