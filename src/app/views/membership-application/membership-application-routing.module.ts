import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembershipAplicationComponent } from './components/membership-aplication/membership-aplication.component';

const routes: Routes = [
  {
    path:'', component: MembershipAplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipApplicationRoutingModule { }
