import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopListComponent} from './component/shop-list/shop-list.component';
import {ShopComponent} from './component/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopListComponent
  },
  {
    path: ':id',
    component: ShopComponent
  },
  {
    path: '**',
    component: ShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
