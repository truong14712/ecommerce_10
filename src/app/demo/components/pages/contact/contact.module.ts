import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, ContactRoutingModule],
    declarations: [ContactComponent],
})
export class ContactModule {}
