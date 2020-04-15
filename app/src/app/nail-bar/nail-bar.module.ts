import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {BlocksModule} from '../shared/modules/blocks/blocks.module';
import {NailBarRoutingModule} from './nail-bar-routing.module';
import {NailBarComponent} from './nail-bar.component';

@NgModule({
  declarations: [NailBarComponent],
  imports: [
    SharedModule,
    NailBarRoutingModule,
    BlocksModule
  ]
})
export class NailBarModule {}
