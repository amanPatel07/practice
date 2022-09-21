import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common-services/common.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormOverlayComponent } from './form-overlay/form-overlay.component';
import { UtilityService } from './common-services/utility.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { PopupComponent } from './popup/popup.component';
import { GetcursorDirective } from './directives/getcursor.directive';


@NgModule({
  declarations: [
    FormOverlayComponent,
    PopupComponent,
    GetcursorDirective
  ],
  imports: [
    CommonModule,
    OverlayModule,
    ReactiveFormsModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    GetcursorDirective
  ],
  providers: [
    CommonService,
    UtilityService
  ]
})
export class SharedModule { }
