import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
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
    submitted: boolean = false;

    ngOnInit() {
        const user = localStorage.getItem('user');
        if (user) {
            this.router.navigate(['/']);
        }
    }
    public formData: FormGroup = new FormGroup({
        name: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
        ]),
        email: new FormControl('', [
            Validators.email,
            Validators.minLength(6),
            Validators.pattern(
                '^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$'
            ),
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
        ]),
        confirmPassword: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
        ]),
    });
    valCheck: string[] = ['remember'];
    handleSubmit() {
        this.submitted = true;
        console.log('submit form: formData = ', this.formData.value);
        this.userService.Signup(this.formData.value).subscribe(
            (res) => {
                this.router.navigate(['/login']);
            },
            (err) => {
                const { error } = err;
                alert(error.message);
            }
        );
    }
}
