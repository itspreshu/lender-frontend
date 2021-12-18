import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsPendingComponent } from './patients-pending.component';

describe('PatientsPendingComponent', () => {
  let component: PatientsPendingComponent;
  let fixture: ComponentFixture<PatientsPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
