import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitOfferDialogComponent } from './submit-offer-dialog.component';

describe('SubmitOfferDialogComponent', () => {
  let component: SubmitOfferDialogComponent;
  let fixture: ComponentFixture<SubmitOfferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitOfferDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitOfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
