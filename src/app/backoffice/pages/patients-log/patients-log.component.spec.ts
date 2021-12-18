import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsLogComponent } from './patients-log.component';

describe('PatientsLogComponent', () => {
  let component: PatientsLogComponent;
  let fixture: ComponentFixture<PatientsLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
