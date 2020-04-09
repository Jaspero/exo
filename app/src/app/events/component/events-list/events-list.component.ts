import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {ScullyRoute} from '@scullyio/ng-lib/lib/route-service/scully-routes.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'exo-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  constructor(public scully: ScullyRoutesService) {}



  events$: Observable<ScullyRoute[]>;

  ngOnInit() {
    this.events$ = this.scully.available$.pipe(
      tap(item => console.log(item)),
      map(items => items.filter(it => it.route.includes('/events/')))
    );
  }
}
