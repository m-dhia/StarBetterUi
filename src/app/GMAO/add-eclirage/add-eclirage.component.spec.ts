import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEclirageComponent } from './add-eclirage.component';

describe('AddEclirageComponent', () => {
  let component: AddEclirageComponent;
  let fixture: ComponentFixture<AddEclirageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEclirageComponent]
    });
    fixture = TestBed.createComponent(AddEclirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
