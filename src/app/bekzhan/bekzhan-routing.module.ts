import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BekzhanComponent} from './bekzhan.component';

const routes: Routes = [
    { path: '', component: BekzhanComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class BekzhanRoutingModule { }
