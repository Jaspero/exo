import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {NotFoundComponent} from './not-found.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
    data: {
      id: 'not-found'
    },
    resolve: {
      page: PageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule {}
