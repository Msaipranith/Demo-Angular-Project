import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDirectivesExComponent } from './attribute-directives-ex.component';

describe('AttributeDirectivesExComponent', () => {
  let component: AttributeDirectivesExComponent;
  let fixture: ComponentFixture<AttributeDirectivesExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributeDirectivesExComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDirectivesExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
