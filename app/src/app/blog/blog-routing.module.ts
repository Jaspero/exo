import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DelayResolver} from '../shared/resolvers/delay.resolver';
import {MetaResolver} from '../shared/resolvers/meta.resolver';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {BlogListComponent} from './components/blog-list/blog-list.component';
import {BlogComponent} from './components/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
    data: {
      id: 'blog'
    },
    resolve: {
      page: PageResolver
    }
  },
  {
    path: ':id',
    component: BlogComponent,
    data: {
      collection: 'blog'
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
export class BlogRoutingModule {}
