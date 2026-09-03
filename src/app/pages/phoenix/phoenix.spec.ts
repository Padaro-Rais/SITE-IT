import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Phoenix } from './phoenix';

describe('Phoenix', () => {
  let component: Phoenix;
  let fixture: ComponentFixture<Phoenix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Phoenix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Phoenix);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
