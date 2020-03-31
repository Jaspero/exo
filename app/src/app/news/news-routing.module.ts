import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsListComponent} from './component/news-list/news-list.component';
import {NewsComponent} from './component/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsListComponent
  },
  {
    path: ':id',
    component: NewsComponent
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
