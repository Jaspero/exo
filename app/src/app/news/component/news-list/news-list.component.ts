import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {ScullyRoute} from '@scullyio/ng-lib/lib/route-service/scully-routes.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'exo-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  constructor(public scully: ScullyRoutesService) {}

  blogs$: Observable<ScullyRoute[]>;

  ngOnInit() {
    this.blogs$ = this.scully.available$.pipe(
      map(items => items.filter(it => it.route.includes('/news/')))
    );
  }
}
