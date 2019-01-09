import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MovieProfileComponent } from './components/movie-profile/movie-profile.component';
import { MoviesProviderService } from './services/movies-provider.service';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { PageMovieListComponent } from './components/page-movie-list/page-movie-list.component';
import { PageMovieProfileComponent } from './components/page-movie-profile/page-movie-profile.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieListItemComponent,
    MovieProfileComponent,
    MovieSearchComponent,
    PageMovieListComponent,
    PageMovieProfileComponent,
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
