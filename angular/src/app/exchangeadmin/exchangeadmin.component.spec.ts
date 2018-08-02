import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeadminComponent } from './exchangeadmin.component';

describe('ExchangeadminComponent', () => {
  let component: ExchangeadminComponent;
  let fixture: ComponentFixture<ExchangeadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
