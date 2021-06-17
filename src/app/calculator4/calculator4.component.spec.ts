import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculator4Component } from './calculator4.component';

describe('Calculator4Component', () => {
  let component: Calculator4Component;
  let fixture: ComponentFixture<Calculator4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calculator4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculator4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
