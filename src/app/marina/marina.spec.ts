import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marina } from './marina';

describe('Marina', () => {
  let component: Marina;
  let fixture: ComponentFixture<Marina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marina],
    }).compileComponents();

    fixture = TestBed.createComponent(Marina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
