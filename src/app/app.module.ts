import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Code404Component } from './components/code404/code404.component';
import { ContentComponent } from './components/home/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Code404Component,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
