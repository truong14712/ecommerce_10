import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { ButtonModule } from 'primeng/button';
import { ProductDetailsComponent } from './productDetails/productDetails.component';
import { ToastModule } from 'primeng/toast';
@NgModule({
    declarations: [ProductDetailsComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ButtonModule,
        ToastModule
    ]
})
export class PagesModule { }
