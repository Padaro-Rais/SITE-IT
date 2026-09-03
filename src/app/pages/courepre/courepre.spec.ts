import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courepre } from './courepre';

describe('Courepre', () => {
  let component: Courepre;
  let fixture: ComponentFixture<Courepre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Courepre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Courepre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
