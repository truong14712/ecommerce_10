import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, AboutRoutingModule],
    declarations: [AboutComponent],
})
export class AboutModule {}
