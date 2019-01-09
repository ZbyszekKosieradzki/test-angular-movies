import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesProviderService {

  constructor(
    private http: HttpClient

  ) {

  }

  fetchMovies() {
    return this.http.get(environment.moviesUrl).toPromise();

  }
}
