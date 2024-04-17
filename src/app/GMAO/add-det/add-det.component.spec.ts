import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetComponent } from './add-det.component';

describe('AddDetComponent', () => {
  let component: AddDetComponent;
  let fixture: ComponentFixture<AddDetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDetComponent]
    });
    fixture = TestBed.createComponent(AddDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
