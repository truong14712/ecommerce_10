import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', component: AboutComponent }])],
    exports: [RouterModule],
})
export class AboutRoutingModule {}
