import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { StaffingFormPresentationComponent } from '../../staffing-form-container/staffing-form-presentation/staffing-form-presentation.component';

@Injectable()
export class StaffingListPresenterService {

  constructor(private overLay: Overlay) { }

  public openForm(){
    const overLayRef = this.overLay.create({
      hasBackdrop: true,
      positionStrategy: this.overLay.position().global().centerHorizontally().centerVertically()
      
    });
    const overlayComponent = new ComponentPortal(StaffingFormPresentationComponent);
    const componentRef = overLayRef.attach(overlayComponent)
    overLayRef.backdropClick().subscribe(()=>{
      overLayRef.detach()
    });
    componentRef.instance.closeOverlay.subscribe(() => overLayRef.detach());
  }
}
