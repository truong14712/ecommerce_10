import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from '../productDetails/productDetails.component';
@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProductDetailsComponent }
    ])],
    exports: [RouterModule]
})
export class ProductDetailsRoutingModule { }
