import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MovieProfileComponent } from './components/movie-profile/movie-profile.component';
import { MoviesProviderService } from './services/movies-provider.service';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieListItemComponent,
    MovieProfileComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  providers: [
    MoviesProviderService
  ],
})
export class MovieModule { }
