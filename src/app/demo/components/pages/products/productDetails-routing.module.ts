import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from '../productDetails/productDetails.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProductsComponent },
            { path: 'detail/:id', component: ProductDetailsComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class ProductsRoutingModule {}
