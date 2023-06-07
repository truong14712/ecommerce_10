import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { ButtonModule } from 'primeng/button';
@NgModule({
    imports: [CommonModule, CartRoutingModule,ButtonModule],
    declarations: [CartComponent],
})
export class CartModule {}
