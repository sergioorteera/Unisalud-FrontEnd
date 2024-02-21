import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public isExpanded: boolean = true;
  public selectedItem: string = '';

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  getSidebarIcon() {
    return this.isExpanded ? './assets/sidebar/collapse-icon.svg': './assets/sidebar/expand-icon.svg' ;
  }

  selectItem(item: string): void {
    this.selectedItem = item;
  }

}
