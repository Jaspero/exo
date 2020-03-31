import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsListComponent} from './component/events-list/events-list.component';
import {EventsComponent} from './component/events/events.component';

const routes: Routes = [
  {
    path: '',
    component: EventsListComponent
  },
  {
    path: ':id',
    component: EventsComponent
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
