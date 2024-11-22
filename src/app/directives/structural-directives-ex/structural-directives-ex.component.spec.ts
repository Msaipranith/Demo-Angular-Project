import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesExComponent } from './structural-directives-ex.component';

describe('StructuralDirectivesExComponent', () => {
  let component: StructuralDirectivesExComponent;
  let fixture: ComponentFixture<StructuralDirectivesExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructuralDirectivesExComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectivesExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
