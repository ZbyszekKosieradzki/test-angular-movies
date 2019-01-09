import { Component, OnInit } from '@angular/core';
import { MoviesProviderService } from 'src/app/movie/services/movies-provider.service';
import { Movies } from 'src/app/movie/interfaces/movies';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-page-search-results',
  templateUrl: './page-search-results.component.html',
  styleUrls: ['./page-search-results.component.css']
})
export class PageSearchResultsComponent implements OnInit {

  movies: Movies = null;

  constructor(

    private moviesProvider: MoviesProviderService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.displayResults();

    this.router.events
      .pipe(
        filter((evt) => evt instanceof NavigationEnd )
      )
      .subscribe(() => {
        //console.log(...args);
        this.displayResults();
      });

  }

  async displayResults() {
    const query = this.route.snapshot.paramMap.get('query');
    //console.log({query});

    const movies = await this.moviesProvider.search(query);
    //console.log({movies});

    this.movies = movies;
  }
}
