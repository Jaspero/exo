import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './shared/components/footer/footer.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {IntroComponent} from './shared/components/intro/intro.component';
import {TextPipe} from './shared/pipes/text.pipe';

const IMPORTS = [
  CommonModule,
  RouterModule,
];

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  IntroComponent
];

const PIPES = [
  TextPipe
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...IMPORTS],
  exports: [...IMPORTS, ...COMPONENTS, ...PIPES]
})
export class SharedModule {}
