import { Component, Inject, Input, OnInit, ViewContainerRef } from '@angular/core';
import { UtilityService } from '../common-services/utility.service';

@Component({
  selector: 'app-form-overlay',
  templateUrl: './form-overlay.component.html',
  styles: [
  ]
})
export class FormOverlayComponent implements OnInit {
  details: any;

  @Input() public set currentDetails(value: any | null) {
    if(value){
      this.details = value
    }
  }

  public get currentDetails(): any | null {
    return this.details
  }

  constructor(
    public utilityService: UtilityService,
  ) { }

  ngOnInit(): void {
    console.log('jashgag',this.details);

  }

}
