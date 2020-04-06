import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {ScullyRoute} from '@scullyio/ng-lib/lib/route-service/scully-routes.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {EventsComponent} from "../../../events/component/events/events.component";
import {BlogComponent} from "../../../blog/components/blog/blog.component";
import {NewsComponent} from "../../../news/component/news/news.component";

@Component({
  selector: 'exo-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  constructor(public scully: ScullyRoutesService) {}

  products = {
    backgrounds: [
      {
        background: 'assets/images/shop/shop-soap.png',
      },
      {
        background: 'assets/images/shop/shop-spray.png',
      },
      {
        background: 'assets/images/shop/shop-candles.png',
      },
      {
        background: 'assets/images/shop/shop-products.png',
      },
      {
        background: 'assets/images/shop/shop-cards.png',
      }
    ]
  };

  blogs$: Observable<ScullyRoute[]>;

  ngOnInit() {
    this.blogs$ = this.scully.available$.pipe(
      map(items => items.filter(it => it.route.includes('/shop/')))
    );
  }
}
