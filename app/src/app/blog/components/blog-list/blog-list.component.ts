import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {ScullyRoute} from '@scullyio/ng-lib/lib/route-service/scully-routes.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'exo-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent implements OnInit {
  constructor(
    public scully: ScullyRoutesService,
    private activatedRoute: ActivatedRoute
  ) {}

  page: any;
  blogs$: Observable<ScullyRoute[]>;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;
    this.blogs$ = this.scully.available$.pipe(
      map(items => items.filter(it => it.route.includes('/blog/')))
    );
  }
}
