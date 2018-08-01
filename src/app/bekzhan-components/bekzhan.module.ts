import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BekzhanComponent } from './bekzhan.component';


@NgModule({
    declarations: [ // Декларации используемых компонентов
        BekzhanComponent
    ],
    imports: [
        BrowserModule,
        CommonModule
    ],
    exports: [ // Экспорт компонентов, которые будут вызваны вне этого модуля
        BekzhanComponent
    ],
    providers: [],
    bootstrap: [BekzhanComponent]
})
export class BekzhanModule { }
