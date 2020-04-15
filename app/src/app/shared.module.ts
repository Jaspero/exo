import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './shared/components/footer/footer.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {IntroComponent} from './shared/components/intro/intro.component';

const IMPORTS = [
  CommonModule,
  RouterModule,
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  IntroComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS],
  exports: [...IMPORTS, ...COMPONENTS]
})
export class SharedModule {}
