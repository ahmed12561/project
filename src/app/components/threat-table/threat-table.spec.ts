import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatTable } from './threat-table';

describe('ThreatTable', () => {
  let component: ThreatTable;
  let fixture: ComponentFixture<ThreatTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreatTable],
    }).compileComponents();

    fixture = TestBed.createComponent(ThreatTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
