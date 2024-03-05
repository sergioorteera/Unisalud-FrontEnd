import { Component } from '@angular/core';

@Component({
  selector: 'app-membership-aplication',
  templateUrl: './membership-aplication.component.html',
  styleUrls: ['./membership-aplication.component.css']
})
export class MembershipAplicationComponent {

  activeTabIndex = 0;

  goBack() {
    if (this.activeTabIndex > 0) {
      this.activeTabIndex--;
    }
  }

  goForward() {
    if (this.activeTabIndex < 3) {
      this.activeTabIndex++;
    }
  }

  isFirstTab() {
    return this.activeTabIndex === 0;
  }

  isLastTab() {
    return this.activeTabIndex === 3;
  }

  getTabClass(index: number): string {
    return this.activeTabIndex === index ? 'active-tab' : '';
  }

}
