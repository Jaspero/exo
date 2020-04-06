import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './components/blog/blog.component';
import {BlogListComponent} from './components/blog-list/blog-list.component';
import {SharedModule} from '../shared.module';

@NgModule({
  declarations: [BlogComponent, BlogListComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule, SharedModule]
})
export class BlogModule {}
