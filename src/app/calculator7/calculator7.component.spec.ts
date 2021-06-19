import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculator7Component } from './calculator7.component';

describe('Calculator7Component', () => {
  let component: Calculator7Component;
  let fixture: ComponentFixture<Calculator7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calculator7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculator7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
