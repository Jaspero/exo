import {Component, OnInit} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'exo-experiences-list',
  templateUrl: './experiences-list.component.html',
  styleUrls: ['./experiences-list.component.scss']
})
export class ExperiencesListComponent implements OnInit {
  constructor(
    public scully: ScullyRoutesService,
    private activatedRoute: ActivatedRoute
  ) {}

  events$: Observable<ScullyRoute[]>;
  page: any;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;
    this.events$ = this.scully.available$.pipe(
      map(items => items.filter(it => it.route.includes('/experiences/')))
    );
  }
}
