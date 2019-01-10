import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding, ElementRef } from '@angular/core';
import * as debug from 'debug';

//const debug = require ('debug ');

const console = {
  log: debug('vavatech:image:log')
  //localStorage.debug = '*'
  //localStorage.debug = 'vavatech:*'
};

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit {

  @Input() src: string = null;
  originalSrc: string = null;

  constructor(

    private $el: ElementRef
  ) { }

  ngOnInit() {
    // console.log(this.src);
    this.updateSource();
  }

  updateSource() {

    //polyfil dla ie IntersectionObserver

    //pobieramy referencje do obrazka
    const $image = this.$el.nativeElement.querySelector('img');
    //tworzymy instancje sluchacza
    const observer = new IntersectionObserver((entries) => {
      //ladujemy obrazek
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('img vievport');
          entry.target.setAttribute('src', this.src);
          observer.disconnect();
        }
      }, {
          threshold: 0.9
        });
    });

    observer.observe($image);
  }
}
