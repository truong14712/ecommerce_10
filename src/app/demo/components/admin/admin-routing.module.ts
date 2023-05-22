import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductManagement } from './productManagement/productManagement.component';
import { CategoryManagement } from './categoryManagement/categoryManagement.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'dashboard', component: DashboardComponent },
            { path: 'products', component: ProductManagement },
            { path: 'categories', component: CategoryManagement },
        ]),
    ],
    exports: [RouterModule],
})
export class DashboardsRoutingModule {}
