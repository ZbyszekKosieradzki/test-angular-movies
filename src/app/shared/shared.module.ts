import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './components/search-form/search-form.component';

import { FormsModule } from '@angular/forms';
import { ImageComponent } from './components/image/image.component';


@NgModule({
  declarations: [SearchFormComponent, ImageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchFormComponent,
    ImageComponent
  ]
})
export class SharedModule { }
