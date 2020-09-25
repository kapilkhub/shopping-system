import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuItem } from './menuItems.interface';

@Component({
  selector: 'kamazon-app-header-top',
  templateUrl: './app-header-top.component.html',
  styleUrls: ['./app-header-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppHeaderTopComponent implements OnInit {

  constructor() { }
  layoutConf: any;
  menuItems: MenuItem[] ;
  menuSource: Subscription
  egretThemes: any[] = [];
  currentLang = 'en';
  progressMode: string;
  notificationCount?: number 
  
  @Input() notificPanel;

  ngOnInit(): void {
    this.menuItems = [{
      name:"Home",
      type:"link",
      icon:"home",
      state:"home"
    }]
  }

  toggleNotific() {
    this.notificPanel.toggle();
  }

}



