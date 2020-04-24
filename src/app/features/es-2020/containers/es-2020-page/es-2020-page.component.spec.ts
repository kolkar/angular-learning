import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Es2020Component } from './latest-es.component';

describe('LatestEsComponent', () => {
  let component: Es2020Component;
  let fixture: ComponentFixture<Es2020Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Es2020Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Es2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
