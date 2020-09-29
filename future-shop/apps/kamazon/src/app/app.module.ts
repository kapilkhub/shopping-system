import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedUiCommonModule } from '@kamazon/ui-common-lib';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@kamazon/layout-lib';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {SharedDataAccessModule} from '@kamazon/shared/data-access'


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedUiCommonModule,
    AppRoutingModule,
    LayoutModule,
    SharedDataAccessModule.forRoot({
      useDefaultApi:environment.api.useDefaultApi,
      apiUrl:environment.api.apiUrl
    }),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot()
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
