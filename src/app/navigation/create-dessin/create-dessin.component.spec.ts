import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDessinComponent } from './create-dessin.component';

describe('CreateDessinComponent', () => {
  let component: CreateDessinComponent;
  let fixture: ComponentFixture<CreateDessinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDessinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDessinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
