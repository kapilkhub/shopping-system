import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiCallService } from '@kamazon/shared/data-access';

@Component({
  selector: 'future-shop-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

}
