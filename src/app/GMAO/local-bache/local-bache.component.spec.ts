import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalBacheComponent } from './local-bache.component';

describe('LocalBacheComponent', () => {
  let component: LocalBacheComponent;
  let fixture: ComponentFixture<LocalBacheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalBacheComponent]
    });
    fixture = TestBed.createComponent(LocalBacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
