import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

const IMPORTS = [CommonModule];
const COMPONENTS = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS, RouterModule],
  exports: [...IMPORTS, ...COMPONENTS]
})
export class SharedModule {}
