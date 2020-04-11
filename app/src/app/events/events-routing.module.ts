import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MetaResolver} from '../shared/resolvers/meta.resolver';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {EventsListComponent} from './component/events-list/events-list.component';
import {EventsComponent} from './component/events/events.component';

const routes: Routes = [
  {
    path: '',
    component: EventsListComponent,
    data: {
      id: 'events'
    },
    resolve: {
      page: PageResolver
    }
  },
  {
    path: ':id',
    component: EventsComponent,
    resolve: {
      meta: MetaResolver
    }
  },
  {
    path: '**',
    component: EventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {}
