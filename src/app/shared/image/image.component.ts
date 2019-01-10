import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as debug from 'debug';

//const debug = require ('debug ');

const console = {
  log: debug('vavtech:image:log')
};

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit {

  @Input() src: string = null;

  constructor() { }

  ngOnInit() {
    console.log(this.src);
  }

}
