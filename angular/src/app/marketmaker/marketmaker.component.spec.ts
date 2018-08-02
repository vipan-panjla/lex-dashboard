import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketmakerComponent } from './marketmaker.component';

describe('MarketmakerComponent', () => {
  let component: MarketmakerComponent;
  let fixture: ComponentFixture<MarketmakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketmakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
