import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {SharedModule} from '../shared.module';
import {MarkdownModule} from '../shared/modules/markdown/markdown.module';
import {ShopListComponent} from './component/shop-list/shop-list.component';
import {ShopComponent} from './component/shop/shop.component';
import {ShopRoutingModule} from './shop-routing.module';
import {IntersectionModule} from '../shared/modules/intersecting/intersection.module';

@NgModule({
  declarations: [ShopComponent, ShopListComponent],
  imports: [
    SharedModule,
    ShopRoutingModule,
    ScullyLibModule,
    MarkdownModule,
    IntersectionModule
  ]
})
export class ShopModule {}
