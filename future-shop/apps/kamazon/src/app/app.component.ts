import { Component } from '@angular/core';
import { ApiCallService } from '@kamazon/shared/data-access';

@Component({
  selector: 'future-shop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kamazon';
  /**
   *
   */
  constructor(private apiCallService:ApiCallService) {
   

  }
}
