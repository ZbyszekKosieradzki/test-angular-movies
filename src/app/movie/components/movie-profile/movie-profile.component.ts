import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesProviderService } from 'src/app/movie/services/movies-provider.service';
import { Movie } from 'src/app/movie/interfaces/movie';

@Component({
  selector: 'app-movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.css']
})
export class MovieProfileComponent {


@Input() movie: Movie = null;

  constructor(
    //private route: ActivatedRoute,
    //private moviesProvider: MoviesProviderService

  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {

  }


}
