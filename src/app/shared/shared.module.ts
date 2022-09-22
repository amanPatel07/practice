import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './common-services/common.service';
import { UtilityService } from './common-services/utility.service';
import { FormOverlayComponent } from './form-overlay/form-overlay.component';
import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    FormOverlayComponent,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    ReactiveFormsModule
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CommonService,
    UtilityService
  ]
})
export class SharedModule { }
