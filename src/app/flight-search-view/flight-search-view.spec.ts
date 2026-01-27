import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchView } from './flight-search-view';

describe('FlightSearchView', () => {
  let component: FlightSearchView;
  let fixture: ComponentFixture<FlightSearchView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightSearchView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightSearchView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
