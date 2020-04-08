import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService} from '@scullyio/ng-lib';
import {ScullyRoute} from '@scullyio/ng-lib/lib/route-service/scully-routes.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'exo-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  constructor(public scully: ScullyRoutesService) {}

  news = {
    news: [
      {
        newsImg: 'assets/images/news/news-exo.png',
        title: 'Exo Menu Lounge',
        date: 'Date: 16.03. 2020',
        category: 'Nail-bar',
        newsDescription:
          'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Loun' +
          'ge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail b' +
          'ar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality o' +
          'rganic products and furnishing an enjoyable atmosphere that appeals to the senses.'
      },
      {
        newsImg: 'assets/images/news/news-lounge.png',
        title: 'Exo Menu Lounge',
        date: 'Date: 16.03. 2020',
        category: 'Lounge',
        newsDescription:
          'EXO Industries is a brand of lifestyle services. The company currently consists of EXO Loun' +
          'ge, a unique cocktail lounge that serves organic, healthy cocktails and EXO Nail Bar, a full-service nail b' +
          'ar dedicated to consistently providing high customer satisfaction by rendering excellent service, quality o' +
          'rganic products and furnishing an enjoyable atmosphere that appeals to the senses.'
      }
    ]
  };

  news$: Observable<ScullyRoute[]>;

  ngOnInit() {
    this.news$ = this.scully.available$.pipe(
      map(items => items.filter(it => it.route.includes('/news/')))
    );
  }
}
