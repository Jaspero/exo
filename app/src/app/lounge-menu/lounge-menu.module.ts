import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared.module';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {LoungeMenuComponent} from './lounge-menu.component';

const routes: Routes = [{
  path: '',
  component: LoungeMenuComponent,
  data: {
    id: 'lounge-menu'
  },
  resolve: {
    page: PageResolver
  }
}];

@NgModule({
  declarations: [LoungeMenuComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class LoungeMenuModule { }
