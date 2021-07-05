import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() isSidebarClicked: boolean | undefined;
  @Input() isMenuClicked: boolean | undefined;

  constructor() {}

  ngOnInit(): void {}

  changeRoute() {
    
  }
}