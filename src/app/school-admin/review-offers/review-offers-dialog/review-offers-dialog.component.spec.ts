import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewOffersDialogComponent } from './review-offers-dialog.component';

describe('ReviewOffersDialogComponent', () => {
  let component: ReviewOffersDialogComponent;
  let fixture: ComponentFixture<ReviewOffersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewOffersDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewOffersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
