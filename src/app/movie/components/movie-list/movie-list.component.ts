import { Component, OnInit, Input } from '@angular/core';
import { MoviesProviderService } from 'src/app/movie/services/movies-provider.service';
import { Movies } from 'src/app/movie/interfaces/movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movies = null;

  constructor(

  ) { }

  ngOnInit() {

  }

}
