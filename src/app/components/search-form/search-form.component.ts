import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {


  query = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.query = this.route.snapshot.paramMap.get('query');
    console.log(this.query);
  }
  onEnter(value: string) {
    console.log('onEnter', { value });

    this.router.navigate(['/search', value]);
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterContentInit() {
    //this.query = this.route.snapshot.paramMap.get('query');

    //console.log(this.activatedRoute);

  }
}
