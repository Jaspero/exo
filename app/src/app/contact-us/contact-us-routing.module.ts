import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageResolver} from '../shared/resolvers/page.resolver';

import {ContactUsComponent} from './contact-us.component';

const routes: Routes = [{
  path: '',
  component: ContactUsComponent,
  data: {
    id: 'contact'
  },
  resolve: {
    page: PageResolver
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule {}
