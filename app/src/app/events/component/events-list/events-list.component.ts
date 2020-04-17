import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {ScullyRoute} from '@scullyio/ng-lib/lib/route-service/scully-routes.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'exo-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsListComponent implements OnInit {
  constructor(
    public scully: ScullyRoutesService,
    private activatedRoute: ActivatedRoute
  ) {}

  events$: Observable<ScullyRoute[]>;
  page: any;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;
    this.events$ = this.scully.available$.pipe(
      map(items => items.filter(it => it.route.includes('/events/')))
    );
  }
}
