import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {HomeComponent} from './home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  data: {
    id: 'home'
  },
  resolve: {
    page: PageResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
