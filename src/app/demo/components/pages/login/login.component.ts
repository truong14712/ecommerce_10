import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/demo/service/user.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(
        public layoutService: LayoutService,
        private userService: UserService,
        private router: Router
    ) {}
    ngOnInit() {}
    public formData: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });
    valCheck: string[] = ['remember'];

    handleSubmit() {
        console.log('submit form: formData = ', this.formData.value);
        const { name, password } = this.formData.value;

        this.userService.Signin(this.formData.value).subscribe();
        this.router.navigate(['/']);
    }
}
