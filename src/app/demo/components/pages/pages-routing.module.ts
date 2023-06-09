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
                path: 'orderHistory',
                loadChildren: () =>
                    import('./OrderHistory/OrderHistory.module').then(
                        (m) => m.OrderHistoryModule
                    ),
            },
            {
                path: 'checkout',
                loadChildren: () =>
                    import('./checkout/checkout.module').then((m) => m.CheckoutModule),
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
            {
                path: 'about',
                loadChildren: () =>
                    import('./about/about.module').then((m) => m.AboutModule),
            },
            {
                path: 'contact',
                loadChildren: () =>
                    import('./contact/contact.module').then(
                        (m) => m.ContactModule
                    ),
            },
            // { path: '**', redirectTo: '/notfound' }
        ]),
    ],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
