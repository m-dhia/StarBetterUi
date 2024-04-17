import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RIAComponent } from './ria.component';

describe('RIAComponent', () => {
  let component: RIAComponent;
  let fixture: ComponentFixture<RIAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RIAComponent]
    });
    fixture = TestBed.createComponent(RIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
