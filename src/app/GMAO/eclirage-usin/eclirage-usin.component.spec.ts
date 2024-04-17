import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EclirageUsinComponent } from './eclirage-usin.component';

describe('EclirageUsinComponent', () => {
  let component: EclirageUsinComponent;
  let fixture: ComponentFixture<EclirageUsinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EclirageUsinComponent]
    });
    fixture = TestBed.createComponent(EclirageUsinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
