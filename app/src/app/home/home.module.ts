import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {BlocksModule} from '../shared/modules/blocks/blocks.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    BlocksModule
  ]
})
export class HomeModule {}
