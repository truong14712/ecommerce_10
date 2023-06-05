import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

@NgModule({
   imports: [RouterModule.forChild([
      { path: ':id', component: CheckoutComponent },
      // { path: '/:id', component: ProductDetailsComponent },
   ])],
   exports: [RouterModule],
})
export class CheckoutRoutingModule {}
