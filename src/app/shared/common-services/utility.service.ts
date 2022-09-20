import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ComponentRef, Injectable } from '@angular/core';
import { FormOverlayComponent } from '../form-overlay/form-overlay.component';
// export const details = new Injectable()

@Injectable()
export class UtilityService {

  public overlayRef!: OverlayRef;
  public componentRef!: ComponentRef<any>

  constructor(
    public overlay: Overlay
  ) {
  }

  public openOverlayForm(details: any) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });
    const viewPortalRef = new ComponentPortal(FormOverlayComponent);
    this.componentRef = this.overlayRef.attach(viewPortalRef);
    this.componentRef.instance.details = details;
    this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
    this._closeOverlay();
  }

  private _closeOverlay() {
    this.componentRef.instance.closeOverlay.subscribe(() =>
      this.overlayRef.detach()
    );
  }
}
