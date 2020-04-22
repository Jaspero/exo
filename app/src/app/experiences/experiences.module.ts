import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {BlocksModule} from '../shared/modules/blocks/blocks.module';
import {ExperiencesComponent} from './component/experiences/experiences.component';
import {ExperiencesRoutingModule} from './experiences-routing.module';
import {RouterModule} from '@angular/router';
import {ExperiencesListComponent} from './component/experiences-list/experiences-list.component';

@NgModule({
  declarations: [ExperiencesComponent, ExperiencesListComponent],
  imports: [SharedModule, BlocksModule, RouterModule, ExperiencesRoutingModule]
})
export class ExperiencesModule {}
