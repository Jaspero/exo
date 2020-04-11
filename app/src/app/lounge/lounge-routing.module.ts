import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {LoungeComponent} from './lounge.component';

const routes: Routes = [{
  path: '',
  component: LoungeComponent,
  data: {
    id: 'lounge'
  },
  resolve: {
    page: PageResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoungeRoutingModule {}
