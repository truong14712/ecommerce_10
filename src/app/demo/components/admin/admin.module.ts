import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';

//import component
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { CrudComponent } from './crud/crud.component';

//để nguyên
import { DashboardsRoutingModule } from './admin-routing.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DashboardsRoutingModule
    ],
    declarations: [DashboardComponent,CrudComponent]
})
export class DashboardModule { }
