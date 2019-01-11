import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './components/image/image.component';
import { SearchFormComponent } from '../components/search-form/search-form.component';
import { FieldErrorsComponent } from './components/field-errors/field-errors.component';


@NgModule({
  declarations: [ ImageComponent, FieldErrorsComponent],
  imports: [
    CommonModule,
    FormsModule,
  ReactiveFormsModule
  ],
  exports: [
    ImageComponent,
    FieldErrorsComponent
  ]
})
export class SharedModule { }
