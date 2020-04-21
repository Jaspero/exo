import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {ExoEventsComponent} from './exo-events.component';

const routes: Routes = [
  {
    path: '',
    component: ExoEventsComponent,
    data: {
      id: 'exo-events'
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
export class ExoEventsRoutingModule {}
