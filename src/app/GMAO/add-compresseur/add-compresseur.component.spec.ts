import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompresseurComponent } from './add-compresseur.component';

describe('AddCompresseurComponent', () => {
  let component: AddCompresseurComponent;
  let fixture: ComponentFixture<AddCompresseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCompresseurComponent]
    });
    fixture = TestBed.createComponent(AddCompresseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
