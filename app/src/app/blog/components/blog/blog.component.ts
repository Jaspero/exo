import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib';

declare var ng: any;

@Component({
  selector: 'exo-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {
  constructor(
    private scully: ScullyRoutesService
  ) {}

  item: any;

  ngOnInit() {
    this.scully.getCurrent().subscribe(value => {
      this.item = value;
    });
  }
}
