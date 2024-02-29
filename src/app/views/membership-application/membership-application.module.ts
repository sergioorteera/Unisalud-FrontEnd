import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipApplicationRoutingModule } from './membership-application-routing.module';
import { MembershipAplicationComponent } from './components/membership-aplication/membership-aplication.component';


@NgModule({
  declarations: [
    MembershipAplicationComponent
  ],
  imports: [
    CommonModule,
    MembershipApplicationRoutingModule
  ]
})
export class MembershipApplicationModule { }
