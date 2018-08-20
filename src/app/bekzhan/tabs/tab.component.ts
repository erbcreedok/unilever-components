import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  styles: [],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent {
  @Input() title: string;
  @Input() active = false;
  @Input() template;
  @Input() dataContext;
}
