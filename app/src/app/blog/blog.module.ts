import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {SharedModule} from '../shared.module';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogListComponent} from './components/blog-list/blog-list.component';
import {BlogComponent} from './components/blog/blog.component';
import {IntersectionModule} from '../shared/modules/intersecting/intersection.module';

@NgModule({
  declarations: [BlogComponent, BlogListComponent],
  imports: [
    SharedModule,
    BlogRoutingModule,
    ScullyLibModule,
    IntersectionModule
  ]
})
export class BlogModule {}
