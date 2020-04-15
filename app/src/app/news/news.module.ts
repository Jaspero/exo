import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {SharedModule} from '../shared.module';
import {NewsListComponent} from './component/news-list/news-list.component';
import {NewsComponent} from './component/news/news.component';
import {NewsRoutingModule} from './news-routing.module';

@NgModule({
  declarations: [NewsComponent, NewsListComponent],
  imports: [
    SharedModule,
    NewsRoutingModule,
    ScullyLibModule
  ]
})
export class NewsModule {}
