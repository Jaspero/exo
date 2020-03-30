import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './components/blog/blog.component';
import {BlogListComponent} from './components/blog-list/blog-list.component';

@NgModule({
  declarations: [BlogComponent, BlogListComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule]
})
export class BlogModule {}
