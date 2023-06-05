import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { TableModule } from 'primeng/table';
import {  } from 'primeng/inputtext';
@NgModule({
    imports: [
        CheckoutRoutingModule,
        TableModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        ReactiveFormsModule,
        ToastModule
    ],
    declarations: [CheckoutComponent],
})
export class CheckoutModule {}
