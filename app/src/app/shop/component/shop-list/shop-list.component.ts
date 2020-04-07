import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {ScullyRoute} from '@scullyio/ng-lib/lib/route-service/scully-routes.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


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
        galleryImg: [
          {
            featProduct: 'assets/images/shop/soap-product.png',
          },
          {
            featProduct: 'assets/images/shop/dispencer.png',
          }
        ]
      },
      {
        background: 'assets/images/shop/shop-spray.png',
        galleryImg: [
          {
            featProduct: 'assets/images/shop/creme.png',
          },
          {
            featProduct: 'assets/images/shop/dispencer.png',
          }
        ]
      },
      {
        background: 'assets/images/shop/shop-candles.png',
        galleryImg: [
          {
            featProduct: 'assets/images/shop/jar.png',
          },
          {
            featProduct: 'assets/images/shop/creme.png',
          },
          {
            featProduct: 'assets/images/shop/white-jar.png',
          },
        ]
      },
      {
        background: 'assets/images/shop/shop-products.png',
        galleryImg: [
          {
            featProduct: 'assets/images/shop/package.png',
          },
          {
            featProduct: 'assets/images/shop/package.png',
          },
        ]
      },
      {
        background: 'assets/images/shop/shop-cards.png',
        galleryImg: [
          {
            featProduct: 'assets/images/shop/cards.png',
          },
        ]
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
