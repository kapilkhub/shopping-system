import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedUiCommonModule} from '@kamazon/ui-common-lib'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedUiCommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
