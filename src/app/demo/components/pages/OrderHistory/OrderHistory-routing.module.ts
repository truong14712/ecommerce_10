import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderHistoryComponent } from './OrderHistory.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: OrderHistoryComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class OrderHistoryRoutingModule {}
