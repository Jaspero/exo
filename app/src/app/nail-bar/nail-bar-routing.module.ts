import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {NailBarComponent} from './nail-bar.component';

const routes: Routes = [{
  path: '',
  component: NailBarComponent,
  data: {
    id: 'nail'
  },
  resolve: {
    page: PageResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NailBarRoutingModule {}
