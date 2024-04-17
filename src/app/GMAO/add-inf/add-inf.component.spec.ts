import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfComponent } from './add-inf.component';

describe('AddInfComponent', () => {
  let component: AddInfComponent;
  let fixture: ComponentFixture<AddInfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInfComponent]
    });
    fixture = TestBed.createComponent(AddInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
