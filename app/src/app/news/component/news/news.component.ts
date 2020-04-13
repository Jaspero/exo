import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

declare var ng: any;

@Component({
  selector: 'exo-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class NewsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  item: any;

  ngOnInit() {
    this.item = this.route.snapshot.data.meta;
  }
}
