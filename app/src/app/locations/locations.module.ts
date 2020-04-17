import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared.module';
import {BlocksModule} from '../shared/modules/blocks/blocks.module';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {LocationsComponent} from './locations.component';

const routes: Routes = [{
  path: '',
  component: LocationsComponent,
  data: {
    id: 'locations'
  },
  resolve: {
    page: PageResolver
  }
}];


@NgModule({
  declarations: [LocationsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    BlocksModule
  ]
})
export class LocationsModule { }
