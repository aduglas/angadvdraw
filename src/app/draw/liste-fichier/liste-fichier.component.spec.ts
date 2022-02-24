import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFichierComponent } from './liste-fichier.component';

describe('ListeFichierComponent', () => {
  let component: ListeFichierComponent;
  let fixture: ComponentFixture<ListeFichierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFichierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFichierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
