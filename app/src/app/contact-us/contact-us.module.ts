import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {ContactUsRoutingModule} from './contact-us-routing.module';
import {ContactUsComponent} from './contact-us.component';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    SharedModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule {}
