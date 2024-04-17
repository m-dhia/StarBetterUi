import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiaComponent } from './add-ria.component';

describe('AddRiaComponent', () => {
  let component: AddRiaComponent;
  let fixture: ComponentFixture<AddRiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRiaComponent]
    });
    fixture = TestBed.createComponent(AddRiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
