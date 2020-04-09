import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {ScullyRoute} from '@scullyio/ng-lib/lib/route-service/scully-routes.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'exo-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  constructor(public scully: ScullyRoutesService) {}



  product$: Observable<ScullyRoute[]>;

  ngOnInit() {
    this.product$ = this.scully.available$.pipe(
      tap(item => console.log(item)),
      map(items => items.filter(it => it.route.includes('/product/')))
    );
  }
}
