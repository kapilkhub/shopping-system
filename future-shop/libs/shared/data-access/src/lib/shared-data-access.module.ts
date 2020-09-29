import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallService, DEFAULT_API, USE_DEFAULT_API } from './api-call.service';
import { SharedModuleConfig } from '..';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [CommonModule, HttpClientModule],
})
export class SharedDataAccessModule {
  public static forRoot(config: SharedModuleConfig): ModuleWithProviders<SharedDataAccessModule> {

    return {
      ngModule: SharedDataAccessModule,
      providers: [
        ApiCallService,        
        { provide: USE_DEFAULT_API, useValue: config.useDefaultApi },
        { provide: DEFAULT_API, useValue: config.apiUrl }
      ]
    };
  }
}
