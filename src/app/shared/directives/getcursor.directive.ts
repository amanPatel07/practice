import { createHostListener } from '@angular/compiler/src/core';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appGetcursor]'
})
export class GetcursorDirective {

  constructor() { }

  @HostListener('click' , ['$event']) public getPosition(event:any){
    console.log(event)
  }

}
