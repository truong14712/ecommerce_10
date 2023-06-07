import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductManagement } from './productManagement/productManagement.component';
import { CategoryManagement } from './categoryManagement/categoryManagement.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminGuard } from '../AdminGuard/AdminGuard.component';
import { OrdersComponent } from './orders/orders.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [AdminGuard],
            },
            {
                path: 'products',
                component: ProductManagement,
                canActivate: [AdminGuard],
            },
            {
                path: 'categories',
                component: CategoryManagement,
                canActivate: [AdminGuard],
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AdminGuard],
            },
            { path: 'orders',
             component: OrdersComponent,
             canActivate: [AdminGuard] 
            },
            // { path: '', redirectTo: '/', pathMatch: 'full' },

        ]),
    ],
    exports: [RouterModule],
})
export class DashboardsRoutingModule {}
