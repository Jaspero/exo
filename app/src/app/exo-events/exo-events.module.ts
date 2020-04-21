import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared.module';
import {BlocksModule} from '../shared/modules/blocks/blocks.module';

import {ExoEventsComponent} from './exo-events.component';

@NgModule({
  declarations: [ExoEventsComponent],
  imports: [CommonModule, SharedModule, BlocksModule]
})
export class ExoEventsModule {}
