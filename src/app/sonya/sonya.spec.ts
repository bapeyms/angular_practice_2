import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sonya } from './sonya';

describe('Sonya', () => {
  let component: Sonya;
  let fixture: ComponentFixture<Sonya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sonya],
    }).compileComponents();

    fixture = TestBed.createComponent(Sonya);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
