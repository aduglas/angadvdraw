import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDessinComponent } from './save-dessin.component';

describe('SaveDessinComponent', () => {
  let component: SaveDessinComponent;
  let fixture: ComponentFixture<SaveDessinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveDessinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDessinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
