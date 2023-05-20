import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './productDetails.component';
import { ProductDetailsRoutingModule } from './productDetails-routing.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [ProductDetailsComponent],
    imports: [CommonModule, ButtonModule, ProductDetailsRoutingModule],
})
export class ProductDetailsModule {}
