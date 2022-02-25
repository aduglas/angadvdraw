import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationWComponent } from './notification-w.component';

describe('NotificationWComponent', () => {
  let component: NotificationWComponent;
  let fixture: ComponentFixture<NotificationWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
