import { Component, OnInit, Input } from '@angular/core';
import { MoviesProviderService } from '../../services/movies-provider.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-page-movie-profile',
  templateUrl: './page-movie-profile.component.html',
  styleUrls: ['./page-movie-profile.component.css']
})
export class PageMovieProfileComponent implements OnInit {

movie: Movie = null;

  constructor(
    private route: ActivatedRoute,
    private moviesProvider: MoviesProviderService

  ) { }

  async ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    console.log({id});
    const movie = await this.moviesProvider.fetchMovieById(id);
    console.log({movie});

    this.movie = movie;


  }

}
