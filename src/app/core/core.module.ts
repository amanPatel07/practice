import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MasterComponent } from './master/master.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MasterComponent,
    SidebarComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
