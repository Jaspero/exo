import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BASE_TITLE} from './shared/resolvers/meta.resolver';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScullyLibModule
  ],
  providers: [
    {
      provide: BASE_TITLE,
      useValue: '| Exo'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
