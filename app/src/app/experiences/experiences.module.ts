import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';
import {BlocksModule} from '../shared/modules/blocks/blocks.module';
import {ExperiencesComponent} from './experiences.component';
import {ExperiencesRoutingModule} from './experiences-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ExperiencesComponent],
  imports: [SharedModule, BlocksModule, RouterModule, ExperiencesRoutingModule]
})
export class ExperiencesModule {}
