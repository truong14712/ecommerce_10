import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ButtonModule } from 'primeng/button';
import { ProductDetailsComponent } from './productDetails/productDetails.component';

@NgModule({
    declarations: [ProductDetailsComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ButtonModule
    ]
})
export class PagesModule { }
