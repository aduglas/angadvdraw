import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRoutageComponent } from './error-routage.component';

describe('ErrorRoutageComponent', () => {
  let component: ErrorRoutageComponent;
  let fixture: ComponentFixture<ErrorRoutageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorRoutageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorRoutageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
