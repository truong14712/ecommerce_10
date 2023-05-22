import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductManagement } from './productManagement/productManagement.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'dashboard', component: DashboardComponent },
            { path: 'products', component: ProductManagement },
        ]),
    ],
    exports: [RouterModule],
})
export class DashboardsRoutingModule {}
