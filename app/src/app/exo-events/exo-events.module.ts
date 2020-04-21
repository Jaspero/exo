import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {BlocksModule} from '../shared/modules/blocks/blocks.module';

import {ExoEventsComponent} from './exo-events.component';
import {ExoEventsRoutingModule} from './exo-events-routing.module';

@NgModule({
  declarations: [ExoEventsComponent],
  imports: [ExoEventsRoutingModule, SharedModule, BlocksModule]
})
export class ExoEventsModule {}
