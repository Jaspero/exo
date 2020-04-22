import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {ExperiencesComponent} from './component/experiences/experiences.component';
import {ExperiencesRoutingModule} from './experiences-routing.module';
import {ExperiencesListComponent} from './component/experiences-list/experiences-list.component';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {IntersectionModule} from '../shared/modules/intersecting/intersection.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ExperiencesComponent, ExperiencesListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExperiencesRoutingModule,
    ScullyLibModule,
    IntersectionModule
  ]
})
export class ExperiencesModule {}
