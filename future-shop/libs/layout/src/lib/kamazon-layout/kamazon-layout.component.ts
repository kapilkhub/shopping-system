import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'kamazon-layout',
  templateUrl: './kamazon-layout.component.html',
  styleUrls: ['./kamazon-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KamazonLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
