import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipApplicationRoutingModule } from './membership-application-routing.module';
import { MembershipAplicationComponent } from './components/membership-aplication/membership-aplication.component';
import { MembershipAreaDataComponent } from './components/pages/components/membership-area-data/membership-area-data.component';
import { ContributorDataComponent } from './components/pages/components/contributor-data/contributor-data.component';
import { FamilyGroupManagementComponent } from './components/pages/components/family-group-management/family-group-management.component';
import { EmployerDataComponent } from './components/pages/components/employer-data/employer-data.component';


@NgModule({
  declarations: [
    MembershipAplicationComponent,
    MembershipAreaDataComponent,
    ContributorDataComponent,
    FamilyGroupManagementComponent,
    EmployerDataComponent
  ],
  imports: [
    CommonModule,
    MembershipApplicationRoutingModule
  ]
})
export class MembershipApplicationModule { }
