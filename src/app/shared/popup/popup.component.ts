import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styles: [
  ]
})
export class PopupComponent implements OnInit {

  
  @Input() public set empName(v : string) {
    this._empName = v;
  }
  public get empName() : string {
    return this._empName;
  }
  private _empName! : string;
  

/**
 * @name closeOverlay
 * @description An event emitter for closing the form overlay
 */
  @Output() closeOverlay: EventEmitter<Event>

  constructor() {
    this.closeOverlay = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public close() {
    this.closeOverlay.emit();
  }

}
