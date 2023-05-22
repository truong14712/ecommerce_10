import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'dashboard', component: DashboardComponent },
        { path: 'crud', component:CrudComponent },
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
