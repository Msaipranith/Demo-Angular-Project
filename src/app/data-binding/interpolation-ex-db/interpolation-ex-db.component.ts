import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-ex-db',
  templateUrl: './interpolation-ex-db.component.html',
  styleUrl: './interpolation-ex-db.component.css'
})
export class InterpolationExDbComponent {
title='angular interpolation example';
currentYear =new Date().getFullYear();


}
