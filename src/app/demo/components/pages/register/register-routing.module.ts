import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: RegisterComponent }
    ])],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }
