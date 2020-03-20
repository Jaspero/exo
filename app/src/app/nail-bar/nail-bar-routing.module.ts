import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NailBarComponent } from './nail-bar.component';

const routes: Routes = [{ path: '', component: NailBarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NailBarRoutingModule { }
