import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatForm } from './threat-form';

describe('ThreatForm', () => {
  let component: ThreatForm;
  let fixture: ComponentFixture<ThreatForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreatForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ThreatForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
