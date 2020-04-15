import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {SharedModule} from '../shared.module';
import {ShopListComponent} from './component/shop-list/shop-list.component';
import {ShopComponent} from './component/shop/shop.component';
import {ShopRoutingModule} from './shop-routing.module';

@NgModule({
  declarations: [ShopComponent, ShopListComponent],
  imports: [SharedModule, ShopRoutingModule, ScullyLibModule]
})
export class ShopModule {}
