import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckValidtyDirective } from './Directives/check-validty.directive';
import { CheckValidityDirective } from './check-validity.directive';
import { CheckvalidityDirective } from './checkvalidity.directive';



@NgModule({
  declarations: [
    CheckValidtyDirective,
    CheckValidityDirective,
    CheckvalidityDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [

  ]
})
export class SharedModule { }
