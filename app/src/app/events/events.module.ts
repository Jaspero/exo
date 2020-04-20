import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {SharedModule} from '../shared.module';
import {EventsComponent} from './component/events/events.component';
import {EventsListComponent} from './component/events-list/events-list.component';
import {EventsRoutingModule} from './events-routing.module';
import {IntersectionModule} from '../shared/modules/intersecting/intersection.module';

@NgModule({
  declarations: [EventsComponent, EventsListComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ScullyLibModule,
    SharedModule,
    IntersectionModule
  ]
})
export class EventsModule {}
