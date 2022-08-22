import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckValidtyDirective } from './Directives/check-validty.directive';
import { CheckValidityDirective } from './check-validity.directive';



@NgModule({
  declarations: [
    CheckValidtyDirective,
    CheckValidityDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [

  ]
})
export class SharedModule { }
