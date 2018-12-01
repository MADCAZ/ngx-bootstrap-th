import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap-th';

@Component({
  selector: 'demo-tabs-manual-selection',
  templateUrl: './manual-selection.html'
})
export class DemoTabsManualSelectionComponent {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
}
