import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/demo/service/user.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    constructor(
        public layoutService: LayoutService,
        private userService: UserService,
        private router: Router
    ) {}

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
        const { name, password, confirmPassword } = this.formData.value;
        if (name === '' || password === '' || confirmPassword === '') {
            alert('Không đc để trống');
        } else {
            this.userService.Signup(this.formData.value).subscribe();
            this.router.navigate(['/login']);
        }
    }
}
