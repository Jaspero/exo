import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {ScullyRoute} from '@scullyio/ng-lib/lib/route-service/scully-routes.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'exo-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  constructor(public scully: ScullyRoutesService) {}

  events = {
    event: [
      {
        bgImage: 'assets/images/events/events-party.png',
        title: 'Private party',
        eventDesc:
          'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, a ' +
          'unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar'
      },
      {
        bgImage: 'assets/images/events/events-bachelorette.png',
        title: 'Bachelorette party',
        eventDesc:
          'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, a ' +
          'unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar'
      },
      {
        bgImage: 'assets/images/events/events-corporate.png',
        title: 'Corporate party',
        eventDesc:
          'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, a ' +
          'unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar'
      },
      {
        bgImage: 'assets/images/events/events-dayout.png',
        title: 'Girls Day Out',
        eventDesc:
          'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, a ' +
          'unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar'
      }
    ]
  };

  blogs$: Observable<ScullyRoute[]>;

  ngOnInit() {
    this.blogs$ = this.scully.available$.pipe(
      map(items => items.filter(it => it.route.includes('/events/')))
    );
  }
}
