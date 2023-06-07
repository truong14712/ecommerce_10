import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { TreeSelectModule } from 'primeng/treeselect';
@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        TreeSelectModule
    ]
})
export class AuthModule { }
