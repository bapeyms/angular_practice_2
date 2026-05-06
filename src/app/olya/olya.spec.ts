import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Olya } from './olya';

describe('Olya', () => {
  let component: Olya;
  let fixture: ComponentFixture<Olya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Olya],
    }).compileComponents();

    fixture = TestBed.createComponent(Olya);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
