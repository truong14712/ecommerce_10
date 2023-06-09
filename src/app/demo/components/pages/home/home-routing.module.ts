import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductDetailsComponent } from '../productDetails/productDetails.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: HomeComponent },
    ])],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
