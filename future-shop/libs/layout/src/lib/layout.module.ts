import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KamazonLayoutComponent } from './kamazon-layout/kamazon-layout.component';
import { AppHeaderTopComponent } from './app-header-top/app-header-top.component';
import { MatProgressBarModule } from "@angular/material/progress-bar"
import { MatIconModule } from "@angular/material/icon"
import { RouterModule } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu"
import { MatGridListModule } from "@angular/material/grid-list"


const Components = [KamazonLayoutComponent]

@NgModule({

  imports: [
    CommonModule,
    MatProgressBarModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatGridListModule
  ],
  declarations: [...Components, AppHeaderTopComponent],
  exports: [...Components]
})
export class LayoutModule { }
