import { Component } from '@angular/core';

/* @Component({
  selector: 'app-event-binding-ex',
  templateUrl: './event-binding-ex.component.html',
  styleUrl: './event-binding-ex.component.css'
})
export class EventBindingExComponent {

message='Hello, welcome to the app!';
  onButtonClick(){
this.message='Button was clicked!';
  }
  
} */


  @Component({
    selector:'app-event-binding-ex',
    templateUrl:'./event-binding-ex.component.html',
    styleUrl:'./event-binding-ex.component.css'
  })
  export class EventBindingExComponent{
    message='Hello, welcome to the app';
    onButtonClick(){
      this.message='Button was clicked';
    }
  }
