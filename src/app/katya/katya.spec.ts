import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Katya } from './katya';

describe('Katya', () => {
  let component: Katya;
  let fixture: ComponentFixture<Katya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Katya],
    }).compileComponents();

    fixture = TestBed.createComponent(Katya);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
