import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
    resolve: {
      meta: MetaResolver
    }
  },
  {
    path: '**',
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
