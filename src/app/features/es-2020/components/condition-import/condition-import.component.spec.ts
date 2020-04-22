import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionImportComponent } from './condition-import.component';

describe('ConditionImportComponent', () => {
  let component: ConditionImportComponent;
  let fixture: ComponentFixture<ConditionImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
