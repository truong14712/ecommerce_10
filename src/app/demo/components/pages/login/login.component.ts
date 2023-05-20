import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {
    FormControl,
    FormGroup,
} from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(public layoutService: LayoutService) {}
    ngOnInit() {}
    public formData: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });
    valCheck: string[] = ['remember'];

    handleSubmit() {
        console.log('submit form: formData = ', this.formData.value);
    }
}
