import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), data: {animation: 'Home'} },
  {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  {path: 'lounge', loadChildren: () => import('./lounge/lounge.module').then(m => m.LoungeModule), data: {animation: 'About'} },
  {path: 'nail', loadChildren: () => import('./nail-bar/nail-bar.module').then(m => m.NailBarModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
