import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculator5Component } from './calculator5.component';

describe('Calculator5Component', () => {
  let component: Calculator5Component;
  let fixture: ComponentFixture<Calculator5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calculator5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculator5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
