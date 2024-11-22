import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives-ex',
  templateUrl: './structural-directives-ex.component.html',
  styleUrl: './structural-directives-ex.component.css'
})
export class StructuralDirectivesExComponent {
  isLoggedIn = true; // Boolean variable to toggle display

  items = ['Angular', 'React', 'Vue']; // Array to loop over

  day = new Date().getDay();
 onInit(){
  console.log(this.day);
 } 
}
