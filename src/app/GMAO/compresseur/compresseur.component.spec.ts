import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompresseurComponent } from './compresseur.component';

describe('CompresseurComponent', () => {
  let component: CompresseurComponent;
  let fixture: ComponentFixture<CompresseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompresseurComponent]
    });
    fixture = TestBed.createComponent(CompresseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
