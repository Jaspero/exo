import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogListComponent} from './components/blog-list/blog-list.component';
import {BlogComponent} from './components/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent
  },
  {
    path: ':id',
    component: BlogComponent
  },
  {
    path: '**',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
