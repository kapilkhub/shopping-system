import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'kamazon-app-header-top',
  templateUrl: './app-header-top.component.html',
  styleUrls: ['./app-header-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppHeaderTopComponent implements OnInit {

  constructor() { }
  layoutConf: any;
  menuItems: any;
  menuSource: Subscription
  egretThemes: any[] = [];
  currentLang = 'en';
  progressMode: string;
  notificationCount?: number 
  
  @Input() notificPanel;

  ngOnInit(): void {
  }

  toggleNotific() {
    this.notificPanel.toggle();
  }

}
