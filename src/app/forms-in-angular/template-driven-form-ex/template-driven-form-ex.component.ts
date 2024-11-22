import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-ex',
  templateUrl: './template-driven-form-ex.component.html',
  styleUrl: './template-driven-form-ex.component.css'
})
export class TemplateDrivenFormExComponent {
  formData: any;

  onSubmit(form: any) {
    this.formData = form.value;
    console.log(this.formData);
  }
}
