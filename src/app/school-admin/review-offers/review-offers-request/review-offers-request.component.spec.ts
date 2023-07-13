import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewOffersRequestComponent } from './review-offers-request.component';

describe('ReviewOffersRequestComponent', () => {
  let component: ReviewOffersRequestComponent;
  let fixture: ComponentFixture<ReviewOffersRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewOffersRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewOffersRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
