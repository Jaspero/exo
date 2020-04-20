import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

declare var ng: any;

@Component({
  selector: 'exo-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  item: any;
  viewMode = 'tab1';
  activeImage: string;

  get bg() {
    return {'background-image': `url(${this.item.displayImage})`};
  }

  ngOnInit() {
    this.item = this.route.snapshot.data.meta;
  }
}
