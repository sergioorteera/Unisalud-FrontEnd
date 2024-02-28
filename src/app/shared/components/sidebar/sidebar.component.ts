import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isAffiliationsCollapsed = true;
  isDataUpdateCollapsed = true;
  isWithdrawalsCollapsed = true;
  isPayrollCollapsed = true;

  selectedOption: string | null = null;  // Variable para rastrear la opción seleccionada

  toggleAffiliations() {
    this.selectedOption = null;
    this.isAffiliationsCollapsed = !this.isAffiliationsCollapsed;
    this.isDataUpdateCollapsed = true;
    this.isWithdrawalsCollapsed = true;
    this.isPayrollCollapsed = true;
  }

  toggleDataUpdate() {
    this.selectedOption = null;
    this.isAffiliationsCollapsed = true;
    this.isDataUpdateCollapsed = !this.isDataUpdateCollapsed;
    this.isWithdrawalsCollapsed = true;
    this.isPayrollCollapsed = true;
  }

  toggleWithdrawals() {
    this.selectedOption = null;
    this.isDataUpdateCollapsed = true;
    this.isAffiliationsCollapsed = true;
    this.isWithdrawalsCollapsed = !this.isWithdrawalsCollapsed;
    this.isPayrollCollapsed = true;
  }

  togglePayroll() {
    this.selectedOption = null;
    this.isDataUpdateCollapsed = true;
    this.isAffiliationsCollapsed = true;
    this.isWithdrawalsCollapsed = true;
    this.isPayrollCollapsed = !this.isPayrollCollapsed;
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

}
