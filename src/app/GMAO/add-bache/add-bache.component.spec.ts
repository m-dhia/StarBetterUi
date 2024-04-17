import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBacheComponent } from './add-bache.component';

describe('AddBacheComponent', () => {
  let component: AddBacheComponent;
  let fixture: ComponentFixture<AddBacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBacheComponent]
    });
    fixture = TestBed.createComponent(AddBacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
