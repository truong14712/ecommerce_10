import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    constructor(public layoutService: LayoutService) {}

    ngOnInit() {}
    public formData: FormGroup = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
    });
    valCheck: string[] = ['remember'];

    handleSubmit() {
        console.log('submit form: formData = ', this.formData.value);
    }
}
