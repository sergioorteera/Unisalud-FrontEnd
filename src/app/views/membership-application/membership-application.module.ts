import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MembershipApplicationRoutingModule } from './membership-application-routing.module';
import { MembershipAplicationComponent } from './components/membership-aplication/membership-aplication.component';
import { MembershipAreaDataComponent } from './components/pages/membership-area-data/membership-area-data.component';
import { ContributorDataComponent } from './components/pages/contributor-data/contributor-data.component';
import { FamilyGroupManagementComponent } from './components/pages/family-group-management/family-group-management.component';
import { EmployerDataComponent } from './components/pages/employer-data/employer-data.component';
import { SharedModule } from 'src/app/shared/shared.module';


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
    MembershipApplicationRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class MembershipApplicationModule { }
