import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Popup_Type } from '../constants';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styles: [
  ]
})
export class PopupComponent implements OnInit {

  @Input() public set event(value : string) {
    this._event = value;
  }
  public get event() : string {
    return this._event;
  }
  private _event! : string;

  
  @Input() public set popupType(value : any) {
    this._popupType = value;
    if(this._popupType === Popup_Type.ACTION_POPUP){
      this.isAction = true
    }
  }
  public get popupType() : any {
    return this._popupType;
  }
  private _popupType! : any;
  
  public isAction!: boolean;

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
