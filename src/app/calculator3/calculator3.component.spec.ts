import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculator3Component } from './calculator3.component';

describe('Calculator3Component', () => {
  let component: Calculator3Component;
  let fixture: ComponentFixture<Calculator3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calculator3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculator3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
