import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimatiseurComponent } from './climatiseur.component';

describe('ClimatiseurComponent', () => {
  let component: ClimatiseurComponent;
  let fixture: ComponentFixture<ClimatiseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClimatiseurComponent]
    });
    fixture = TestBed.createComponent(ClimatiseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
