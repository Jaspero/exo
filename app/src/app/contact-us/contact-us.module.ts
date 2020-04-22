import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {LoadClickModule} from '@jaspero/ng-helpers';
import {SharedModule} from '../shared.module';
import {MarkdownModule} from '../shared/modules/markdown/markdown.module';
import {ContactUsRoutingModule} from './contact-us-routing.module';
import {ContactUsComponent} from './contact-us.component';
import {IntersectionModule} from '../shared/modules/intersecting/intersection.module';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    SharedModule,

    ReactiveFormsModule,
    HttpClientModule,

    ContactUsRoutingModule,
    MarkdownModule,
    IntersectionModule,
    LoadClickModule
  ]
})
export class ContactUsModule {}
