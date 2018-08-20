import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';
import {UiButtonTabComponent} from './ui-button-tab.component';

@Component({
  selector: 'ui-button-tabs',
  templateUrl: './ui-button-tabs.component.html',
  styleUrls: ['./ui-button-tabs.component.scss']
})
export class UiButtonTabsComponent implements AfterContentInit {

  @ContentChildren(UiButtonTabComponent) tabs: QueryList<UiButtonTabComponent>;

  constructor() {}

  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: UiButtonTabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(t => (t.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }

}

