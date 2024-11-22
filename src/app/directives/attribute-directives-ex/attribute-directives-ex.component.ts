import { Component } from '@angular/core';
import { TwoWayBindingExComponent } from '../../data-binding/two-way-binding-ex/two-way-binding-ex.component';
import { DependencyInjectionExService } from '../../dependency-injection-ex.service';

@Component({
  selector: 'app-attribute-directives-ex',
  templateUrl: './attribute-directives-ex.component.html',
  styleUrl: './attribute-directives-ex.component.css'
})
export class AttributeDirectivesExComponent {
isHighlighted=false;

onClick(){
  this.isHighlighted=true;
}

}
