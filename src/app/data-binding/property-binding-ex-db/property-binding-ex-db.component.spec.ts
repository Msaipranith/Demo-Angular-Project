import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingExDbComponent } from './property-binding-ex-db.component';

describe('PropertyBindingExDbComponent', () => {
  let component: PropertyBindingExDbComponent;
  let fixture: ComponentFixture<PropertyBindingExDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyBindingExDbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBindingExDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
