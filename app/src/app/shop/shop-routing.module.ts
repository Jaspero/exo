import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MetaResolver} from '../shared/resolvers/meta.resolver';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {ShopListComponent} from './component/shop-list/shop-list.component';
import {ShopComponent} from './component/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopListComponent,
    data: {
      id: 'shop'
    },
    resolve: {
      page: PageResolver
    }
  },
  {
    path: ':id',
    component: ShopComponent,
    data: {
      collection: 'shop'
    },
    resolve: {
      meta: MetaResolver
    }
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
