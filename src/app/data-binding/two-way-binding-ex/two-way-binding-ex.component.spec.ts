import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingExComponent } from './two-way-binding-ex.component';

describe('TwoWayBindingExComponent', () => {
  let component: TwoWayBindingExComponent;
  let fixture: ComponentFixture<TwoWayBindingExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoWayBindingExComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindingExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
