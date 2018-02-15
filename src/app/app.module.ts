import { BrowserModule } from '@angular/platform-browser';
import { PrebootModule } from 'preboot';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // .withServerTransition() is needed to support Universal rendering.
    BrowserModule.withServerTransition({appId: 'yg-app'}),
    PrebootModule.withConfig({appRoot: 'yg-root'}),
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
  ],
  entryComponents: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
