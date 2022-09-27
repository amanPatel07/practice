import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Popup_Type } from '../constants';
import { FormOverlayComponent } from '../form-overlay/form-overlay.component';
import { PopupComponent } from '../popup/popup.component';
import { CommonService } from './common.service';

@Injectable()
export class UtilityService {

  public overlayRef!: OverlayRef;
  public componentRef!: ComponentRef<any>;
  
  private _searchText: Subject<any>;
  public searchText$: Observable<any>;

  constructor(
    public overlay: Overlay,
    private _commonService: CommonService
  ) {
    this._searchText = new Subject();
    this.searchText$ = new Observable();
    this.searchText$ = this._searchText.asObservable();
  }

  /**
   * @name openOverlayForm
   * @param details Get the current employee details and department
   * @param popupType Get the pop up type
   * @descripiton Open the form overlay for the Staffing an employee in a project
   */
  public openOverlayForm(details: any, popupType?: Popup_Type) {
    let config = {
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    }
    let viewPortalRef;
    this.overlayRef = this.overlay.create(config);
    viewPortalRef = new ComponentPortal(FormOverlayComponent);
    this.componentRef = this.overlayRef.attach(viewPortalRef);
    this.componentRef.instance.details = details;
    this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
    this._closeOverlay();
  }

  /**
   * @name openPopup
   * @param event Get the event for opening an action popup or notification popup
   * @param popupType Get the pop up type
   * @description Open the action pop up or the notification pop up  
   */
  public openPopup(event: any, popupType?: Popup_Type) {
    console.log(event)
    let position;
    (popupType === Popup_Type.ACTION_POPUP) ?
      console.log('PopUp')
      // position = this.overlay.position().global().left(event.event['clientX'] - 60 + "px").top(event.event['clientY'] - 60 + "px")
      :
      position = this.overlay.position().global().centerHorizontally().centerVertically();
    let config = {
      hasBackdrop: true,
      positionStrategy: position
    }
    this.overlayRef = this.overlay.create(config);
    const viewPortal = new ComponentPortal(PopupComponent);
    this.componentRef = this.overlayRef.attach(viewPortal);
    this.componentRef.instance.event = event;
    this.componentRef.instance.popupType = popupType
    this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
    this._closeOverlay();
  }


  /**
   * @name _closeOverlay
   * @description Service to close the overlay
   */
  private _closeOverlay() {
    this.componentRef.instance.closeOverlay.subscribe(() =>
      this.overlayRef.detach()
    );
  }


  public getSearchResult(searchText: any, departmentId: any) {
    this._commonService.getDepartmentById(departmentId).subscribe((res) => {
      let employeeList = { ...res };
      console.log(searchText.split(' ').join('').toLowerCase())
      let result = employeeList.employee.filter((item: any) =>
        item?.employeeName?.split(' ').join('').toLowerCase().includes(searchText) ||
        item?.role?.split(' ').join('').toLowerCase().includes(searchText) ||
        item?.designation?.split(' ').join('').toLowerCase().includes(searchText) ||
        item?.email?.split(' ').join('').toLowerCase().includes(searchText)
      );
      console.log(result)
      this._searchText.next(result);
    })
  }


  public updateEmployee(){
    
  }
}
