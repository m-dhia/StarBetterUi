import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalInflamableComponent } from './local-inflamable.component';

describe('LocalInflamableComponent', () => {
  let component: LocalInflamableComponent;
  let fixture: ComponentFixture<LocalInflamableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalInflamableComponent]
    });
    fixture = TestBed.createComponent(LocalInflamableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
