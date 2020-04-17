import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

declare var ng: any;

@Component({
  selector: 'exo-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  item: any;

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.data.meta;
  }
}
