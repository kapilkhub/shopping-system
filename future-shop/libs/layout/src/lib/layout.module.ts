import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KamazonLayoutComponent } from './kamazon-layout/kamazon-layout.component';
import { AppHeaderTopComponent } from './app-header-top/app-header-top.component';
import { MatProgressBarModule } from "@angular/material/progress-bar"
import { MatIconModule } from "@angular/material/icon"
import { RouterModule } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu"
import { MatGridListModule } from "@angular/material/grid-list"
import { MatSidenavModule } from "@angular/material/sidenav"
import { SidebarTopComponent } from './sidebar-top/sidebar-top.component';



const Components = [KamazonLayoutComponent]

@NgModule({

  imports: [
    CommonModule,
    MatProgressBarModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatGridListModule,
    MatSidenavModule
  ],
  declarations: [...Components, AppHeaderTopComponent,SidebarTopComponent],
  exports: [...Components],

})
export class LayoutModule { }
