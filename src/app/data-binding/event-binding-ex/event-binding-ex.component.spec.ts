import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingExComponent } from './event-binding-ex.component';

describe('EventBindingExComponent', () => {
  let component: EventBindingExComponent;
  let fixture: ComponentFixture<EventBindingExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventBindingExComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
