import { Component, Input } from '@angular/core';

@Component({
    selector: 'ui-button-tab',
    styles: [],
    template: `
        <div [hidden]="!active" class="pane">
            <ng-content></ng-content>
        </div>
    `
})
export class UiButtonTabComponent {
    @Input() title: string;
    @Input() active = false;
    @Input() route: string[] = [];
}
