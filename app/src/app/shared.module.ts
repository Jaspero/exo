import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {StopPropagationModule} from '@jaspero/ng-helpers';

const IMPORTS = [CommonModule, StopPropagationModule];
const COMPONENTS = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...IMPORTS, RouterModule],
  exports: [...IMPORTS, ...COMPONENTS]
})
export class SharedModule {}
