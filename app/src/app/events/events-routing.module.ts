import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DelayResolver} from '../shared/resolvers/delay.resolver';
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
    data: {
      collection: 'events'
    },
    resolve: {
      meta: MetaResolver,
      delay: DelayResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {}
