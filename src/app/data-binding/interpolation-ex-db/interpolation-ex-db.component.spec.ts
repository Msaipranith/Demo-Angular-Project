import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationExDbComponent } from './interpolation-ex-db.component';

describe('InterpolationExDbComponent', () => {
  let component: InterpolationExDbComponent;
  let fixture: ComponentFixture<InterpolationExDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpolationExDbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolationExDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
