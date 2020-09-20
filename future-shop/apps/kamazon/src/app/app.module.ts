import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedUiCommonModule} from '@kamazon/ui-common-lib'
import {AppRoutingModule} from "./app-routing.module"
import {LayoutModule} from "@kamazon/layout-lib";
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedUiCommonModule,AppRoutingModule,LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
