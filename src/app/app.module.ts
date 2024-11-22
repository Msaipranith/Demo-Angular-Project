import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InterpolationExDbComponent } from './data-binding/interpolation-ex-db/interpolation-ex-db.component';
import { PropertyBindingExDbComponent } from './data-binding/property-binding-ex-db/property-binding-ex-db.component';
import { EventBindingExComponent } from './data-binding/event-binding-ex/event-binding-ex.component';
import { TwoWayBindingExComponent } from './data-binding/two-way-binding-ex/two-way-binding-ex.component';

import { FormsModule } from '@angular/forms';
import { StructuralDirectivesExComponent } from './directives/structural-directives-ex/structural-directives-ex.component';
import { AttributeDirectivesExComponent } from './directives/attribute-directives-ex/attribute-directives-ex.component';
import { TemplateDrivenFormExComponent } from './forms-in-angular/template-driven-form-ex/template-driven-form-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationExDbComponent,
    PropertyBindingExDbComponent,
    EventBindingExComponent,
    TwoWayBindingExComponent,
    StructuralDirectivesExComponent,
    AttributeDirectivesExComponent,
    TemplateDrivenFormExComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
