import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPressDechetComponent } from './add-press-dechet.component';

describe('AddPressDechetComponent', () => {
  let component: AddPressDechetComponent;
  let fixture: ComponentFixture<AddPressDechetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPressDechetComponent]
    });
    fixture = TestBed.createComponent(AddPressDechetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
