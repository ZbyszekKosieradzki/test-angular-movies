import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Movies } from '../interfaces/movies';


@Injectable({
  providedIn: 'root'
})
export class MoviesProviderService {

  async search(query: string): Promise<Movies> {
    const movies: Movies = await this.fetchMovies();
    return movies.filter((movie) => {
const istitle =  new RegExp(query, 'i').test(movie.title);
const isdesc =  new RegExp(query, 'i').test(movie.description);


return istitle || isdesc;

    });
  }

  constructor(
    private http: HttpClient

  ) {

  }

  fetchMovies() {
    return <Promise<Movies>>this.http.get(environment.moviesUrl).toPromise();
  }



  async fetchMovieById(id: string) {
    const movies: Movies = await this.fetchMovies();
    console.log(movies);
    return movies.find((movie) => {
      return movie.id === id;
    });
  }
}
