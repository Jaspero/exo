import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PressListComponent} from './component/press-list/press-list.component';
import {PressComponent} from './component/press/press.component';

const routes: Routes = [
  {
    path: '',
    component: PressListComponent
  },
  {
    path: ':id',
    component: PressComponent
  },
  {
    path: '**',
    component: PressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PressRoutingModule {}
