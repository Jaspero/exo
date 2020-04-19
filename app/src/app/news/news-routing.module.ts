import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DelayResolver} from '../shared/resolvers/delay.resolver';
import {MetaResolver} from '../shared/resolvers/meta.resolver';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {NewsListComponent} from './component/news-list/news-list.component';
import {NewsComponent} from './component/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsListComponent,
    data: {
      id: 'news'
    },
    resolve: {
      page: PageResolver
    }
  },
  {
    path: ':id',
    component: NewsComponent,
    data: {
      collection: 'news'
    },
    resolve: {
      meta: MetaResolver,
      delay: DelayResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
