import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClimComponent } from './add-serveur.component';

describe('AddClimComponent', () => {
  let component: AddClimComponent;
  let fixture: ComponentFixture<AddClimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddClimComponent]
    });
    fixture = TestBed.createComponent(AddClimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
