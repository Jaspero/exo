import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared.module';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {NailBarMenuComponent} from './nail-bar-menu.component';

const routes: Routes = [{
  path: '',
  component: NailBarMenuComponent,
  data: {
    id: 'nail-bar-menu'
  },
  resolve: {
    page: PageResolver
  }
}];

@NgModule({
  declarations: [NailBarMenuComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class NailBarMenuModule { }
