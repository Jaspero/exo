import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlocksModule} from '../shared/modules/blocks/blocks.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    BlocksModule
  ]
})
export class HomeModule {}
