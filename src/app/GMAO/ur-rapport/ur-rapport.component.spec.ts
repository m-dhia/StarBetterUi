import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrRapportComponent } from './ur-rapport.component';

describe('UrRapportComponent', () => {
  let component: UrRapportComponent;
  let fixture: ComponentFixture<UrRapportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrRapportComponent]
    });
    fixture = TestBed.createComponent(UrRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
