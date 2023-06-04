import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AdminLayoutComponent } from './layout/app.layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { AdminGuard } from './demo/components/AdminGuard/AdminGuard.component';
@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: UserLayoutComponent,
                    loadChildren: () =>
                        import('./demo/components/pages/pages.module').then(
                            (m) => m.PagesModule
                        ),
                },
                {
                    path: 'admin',
                    component: AdminLayoutComponent,
                    children: [
                        {
                            path: '',
                            loadChildren: () =>
                                import(
                                    './demo/components/admin/admin.module'
                                ).then((m) => m.DashboardModule),
                        },
                    ],
                    canActivate: [AdminGuard],
                },
                {
                    path: 'auth',
                    loadChildren: () =>
                        import('./demo/components/auth/auth.module').then(
                            (m) => m.AuthModule
                        ),
                },
                { path: '**', component: NotfoundComponent },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
