import { Component, OnInit } from '@angular/core';
import { MoviesProviderService } from 'src/app/services/movies-provider.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

public movies: Array<Object> = null;

  constructor(
    private moviesProvider: MoviesProviderService
  ) { }

  ngOnInit() {
    this.moviesProvider.fetchMovies()
    .then((movies)=>{
      this.movies = movies;
    })
  }

}
