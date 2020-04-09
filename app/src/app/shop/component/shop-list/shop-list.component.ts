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

  products = {
    backgrounds: [
      {
        background: 'assets/images/shop/shop-soap.png',
        title: 'Soap and Lotion',
        description: 'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, ' +
          'a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar ' +
          'dedicated to consistently providing high customer satisfaction by rendering excellent service, quality org' +
          'anic products and furnishing an enjoyable atmosphere that appeals to the senses.',
        galleryImg: [
          {
            featProduct: 'assets/images/shop/soap-product.png'
          },
          {
            featProduct: 'assets/images/shop/dispencer.png'
          }
        ]
      },
      {
        background: 'assets/images/shop/shop-spray.png',
        title: 'Spray and Mist',
        description: 'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, ' +
          'a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar ' +
          'dedicated to consistently providing high customer satisfaction by rendering excellent service, quality org' +
          'anic products and furnishing an enjoyable atmosphere that appeals to the senses.',
        galleryImg: [
          {
            featProduct: 'assets/images/shop/creme.png'
          },
          {
            featProduct: 'assets/images/shop/dispencer.png'
          }
        ]
      },
      {
        background: 'assets/images/shop/shop-candles.png',
        title: 'Candles',
        description: 'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, ' +
          'a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar ' +
          'dedicated to consistently providing high customer satisfaction by rendering excellent service, quality org' +
          'anic products and furnishing an enjoyable atmosphere that appeals to the senses.',
        galleryImg: [
          {
            featProduct: 'assets/images/shop/jar.png'
          },
          {
            featProduct: 'assets/images/shop/creme.png'
          },
          {
            featProduct: 'assets/images/shop/white-jar.png'
          }
        ]
      },
      {
        background: 'assets/images/shop/shop-products.png',
        title: 'CBD Products',
        description: 'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, ' +
          'a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar ' +
          'dedicated to consistently providing high customer satisfaction by rendering excellent service, quality org' +
          'anic products and furnishing an enjoyable atmosphere that appeals to the senses.',
        galleryImg: [
          {
            featProduct: 'assets/images/shop/package.png'
          },
          {
            featProduct: 'assets/images/shop/package.png'
          }
        ]
      },
      {
        background: 'assets/images/shop/shop-cards.png',
        title: 'Cards',
        description: 'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Lounge, ' +
          'a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail bar ' +
          'dedicated to consistently providing high customer satisfaction by rendering excellent service, quality org' +
          'anic products and furnishing an enjoyable atmosphere that appeals to the senses.',
        galleryImg: [
          {
            featProduct: 'assets/images/shop/cards.png'
          }
        ]
      }
    ]
  };

  product$: Observable<ScullyRoute[]>;

  ngOnInit() {
    this.product$ = this.scully.available$.pipe(
      tap(item => console.log(item)),
      map(items => items.filter(it => it.route.includes('/shop/')))
    );
  }
}
