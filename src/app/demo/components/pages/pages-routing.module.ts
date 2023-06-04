import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                loadChildren: () =>
                    import('./home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'products',
                loadChildren: () =>
                    import('./products/products.module').then(
                        (m) => m.ProductsModule
                    ),
            },
            {
                path: 'login',
                loadChildren: () =>
                    import('./login/login.module').then((m) => m.LoginModule),
            },
            {
                path: 'register',
                loadChildren: () =>
                    import('./register/register.module').then(
                        (m) => m.RegisterModule
                    ),
            },
            {
                path: 'cart',
                loadChildren: () =>
                    import('./cart/cart.module').then((m) => m.CartModule),
            },
            {
                path: 'profile',
                loadChildren: () =>
                    import('./profile/profile.module').then(
                        (m) => m.ProfileModule
                    ),
            },
            // { path: '**', redirectTo: '/notfound' }
        ]),
    ],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
