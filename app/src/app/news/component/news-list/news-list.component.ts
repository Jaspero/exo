import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {ScullyRoute} from '@scullyio/ng-lib/lib/route-service/scully-routes.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'exo-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsListComponent implements OnInit {
  constructor(
    public scully: ScullyRoutesService,
    private activatedRoute: ActivatedRoute
  ) {}

  page: any;
  news$: Observable<ScullyRoute[]>;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;
    this.news$ = this.scully.available$.pipe(
      map(items => items.filter(it => it.route.includes('/news/')))
    );
  }
}
