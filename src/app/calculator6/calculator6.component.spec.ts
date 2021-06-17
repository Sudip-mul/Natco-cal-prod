import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculator6Component } from './calculator6.component';

describe('Calculator6Component', () => {
  let component: Calculator6Component;
  let fixture: ComponentFixture<Calculator6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calculator6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculator6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
