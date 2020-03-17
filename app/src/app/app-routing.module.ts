import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), data: {animation: 'Home'} },
  {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule), data: {animation: 'About'} },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
