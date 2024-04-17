import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressDechetComponent } from './press-dechet.component';

describe('PressDechetComponent', () => {
  let component: PressDechetComponent;
  let fixture: ComponentFixture<PressDechetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PressDechetComponent]
    });
    fixture = TestBed.createComponent(PressDechetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
