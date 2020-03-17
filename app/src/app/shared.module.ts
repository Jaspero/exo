import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';




const IMPORTS = [
  CommonModule,
];
const COMPONENTS = [
  HeaderComponent
];




@NgModule({
  declarations: [...COMPONENTS, ],
  imports: [...IMPORTS, RouterModule],
  exports: [...IMPORTS, ...COMPONENTS],
})
export class SharedModule {}
