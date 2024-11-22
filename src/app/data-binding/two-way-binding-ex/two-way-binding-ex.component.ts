import { Component, Injectable } from '@angular/core';

@Injectable({

  providedIn:'root' // makes this service available application wide
})



@Component({
  selector: 'app-two-way-binding-ex',
  templateUrl: './two-way-binding-ex.component.html',
  styleUrl: './two-way-binding-ex.component.css'
})
export class TwoWayBindingExComponent {
name='';


}
