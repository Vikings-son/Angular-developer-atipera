import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicTableComponent } from './periodic-table.component';

describe('PeriodicTableComponent', () => {
  let component: PeriodicTableComponent;
  let fixture: ComponentFixture<PeriodicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeriodicTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeriodicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
