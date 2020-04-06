import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {SharedModule} from '../shared.module';
import {ShopComponent} from './component/shop/shop.component';
import {ShopListComponent} from './component/shop-list/shop-list.component';
import {ShopRoutingModule} from './shop-routing.module';

@NgModule({
  declarations: [ShopComponent, ShopListComponent],
  imports: [CommonModule, ShopRoutingModule, ScullyLibModule, SharedModule]
})
export class ShopModule {}
