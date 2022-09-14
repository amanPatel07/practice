import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { FormOverlayComponent } from '../form-overlay/form-overlay.component';
// export const details = new Injectable()

@Injectable()
export class UtilityService {

  overlayRef!: OverlayRef

  constructor(
    public overlay: Overlay
  ) { }

  public openOverlayForm(details: any) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });
    // let injector = Injector.create({
    //   parent: this._injector,
    //   providers: [details]
    // })
    const viewPortalRef = new ComponentPortal(FormOverlayComponent);
    const componentRef = this.overlayRef.attach(viewPortalRef);
    componentRef.instance.details = details
    this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
    console.log(details);
  }
}
