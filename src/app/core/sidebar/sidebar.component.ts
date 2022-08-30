import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public isDropDownOpen: Boolean;

  constructor() {
    this.isDropDownOpen = false;
  }

  ngOnInit(): void {
  }

  public dropDown() {
    this.isDropDownOpen = !this.isDropDownOpen
  }

}
