import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { OrderHistoryComponent } from './OrderHistory.component';
import { OrderHistoryRoutingModule } from './OrderHistory-routing.module';
@NgModule({
    imports: [
        CommonModule,
        OrderHistoryRoutingModule,
        FormsModule,
        TableModule,
        RatingModule,
        ButtonModule,
    ],
    declarations: [OrderHistoryComponent],
})
export class OrderHistoryModule {}
