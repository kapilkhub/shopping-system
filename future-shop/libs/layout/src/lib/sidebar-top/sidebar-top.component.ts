import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { of, Subscription } from "rxjs";



@Component({
  selector: 'app-sidebar-top',
  templateUrl: './sidebar-top.component.html'
})
export class SidebarTopComponent implements OnInit, OnDestroy, AfterViewInit {
  
  public menuItems: any[];
  private menuItemsSub: Subscription;
  constructor(
   
  ) { }

  ngOnInit() {
    // this.menuItemsSub = of([]).subscribe(menuItem => {
    //   this.menuItems = menuItem.entityList.filter(item => item.type !== 'icon' && item.type !== 'separator');
    // });
  }

  ngAfterViewInit() {
   
  }

  ngOnDestroy() {
    if (this.menuItemsSub) {
      this.menuItemsSub.unsubscribe()
    }
  }

}
