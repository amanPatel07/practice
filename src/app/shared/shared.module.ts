import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common-services/common.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    CommonService
  ]
})
export class SharedModule { }
