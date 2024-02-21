import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    PrincipalPageComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrincipalPageComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
