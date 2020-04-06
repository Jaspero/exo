import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {NewsComponent} from './component/news/news.component';
import {NewsListComponent} from './component/news-list/news-list.component';
import {NewsRoutingModule} from './news-routing.module';
import {SharedModule} from '../shared.module';

@NgModule({
  declarations: [NewsComponent, NewsListComponent],
  imports: [CommonModule, NewsRoutingModule, ScullyLibModule, SharedModule]
})
export class NewsModule {}
