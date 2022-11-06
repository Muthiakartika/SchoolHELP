import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceDialogComponent } from './assistance-dialog.component';

describe('AssistanceDialogComponent', () => {
  let component: AssistanceDialogComponent;
  let fixture: ComponentFixture<AssistanceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
