import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../environments/environment';

declare var ng: any;

@Component({
  selector: 'exo-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class ShopComponent implements OnInit, AfterViewInit {
  constructor(private route: ActivatedRoute) {}

  item: any;
  viewMode = 'tab1';
  activeImage: string;

  get bg() {
    return {'background-image': `url(${this.item.displayImage})`}
  }

  ngOnInit() {
    this.item = this.route.snapshot.data.meta;
    // TODO: Add placeholder image
    this.activeImage = this.item.galleryImages[0] ? this.item.galleryImages[0].image : '';
  }

  ngAfterViewInit() {
    this.loadShopify();
  }

  private loadShopify() {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    const id = this.item.productId;
    const env = environment.shopify;
    // @ts-ignore
    if (window.ShopifyBuy) {
      // @ts-ignore
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      // @ts-ignore
      const client = window.ShopifyBuy.buildClient(env);

      // @ts-ignore
      window.ShopifyBuy.UI.onReady(client).then( (ui) => {
        ui.createComponent('product', {
          id,
          node: document.getElementById('product-component'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            'product': {
              'styles': {
                'product': {
                  '@media (min-width: 601px)': {
                    'max-width': 'calc(25% - 20px)',
                    'margin-left': '20px',
                    'margin-bottom': '50px'
                  }
                }
              },
              'contents': {
                'img': false,
                'title': false,
                'price': false
              },
              'text': {
                'button': 'Add to cart'
              }
            },
            'productSet': {
              'styles': {
                'products': {
                  '@media (min-width: 601px)': {
                    'margin-left': '-20px'
                  }
                }
              }
            },
            'modalProduct': {
              'contents': {
                'img': false,
                'imgWithCarousel': true,
                'button': false,
                'buttonWithQuantity': true
              },
              'styles': {
                'product': {
                  '@media (min-width: 601px)': {
                    'max-width': '100%',
                    'margin-left': '0px',
                    'margin-bottom': '0px'
                  }
                }
              },
              'text': {
                'button': 'Add to cart'
              }
            },
            'cart': {
              'text': {
                'total': 'Subtotal',
                'button': 'Checkout'
              }
            }
          },
        });
      });
    }
  }
}
