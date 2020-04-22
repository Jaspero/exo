import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageResolver} from '../shared/resolvers/page.resolver';
import {ExperiencesComponent} from './experiences.component';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesComponent,
    data: {
      id: 'experiences'
    },
    resolve: {
      page: PageResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule {}
