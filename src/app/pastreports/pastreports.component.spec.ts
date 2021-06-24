import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastreportsComponent } from './pastreports.component';

describe('PastreportsComponent', () => {
  let component: PastreportsComponent;
  let fixture: ComponentFixture<PastreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
