import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/demo/service/user.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [MessageService],
})
export class LoginComponent implements OnInit {
    constructor(
        public layoutService: LayoutService,
        private userService: UserService,
        private router: Router,
        private messageService: MessageService
    ) {}
    ngOnInit() {
        const user = localStorage.getItem('user');
        if (user) {
            this.router.navigate(['/']);
        }
    }
    public formData: FormGroup = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.min(6)),
    });
    valCheck: string[] = ['remember'];
    userGet: any = {};
    user: any;
    submitted: boolean = false;

    handleSubmit() {
        this.submitted = true;
        console.log('submit form: formData = ', this.formData.value);
        this.userService.Signin(this.formData.value).subscribe(
            (res) => {
                const { user } = res;
                console.log(user);
                localStorage.setItem(
                    'isAdmin',
                    JSON.stringify(user.role === 'admin')
                );
                if (user.role === 'admin') {
                    this.router.navigate(['admin/dashboard']);
                } else {
                    this.router.navigate(['/']);
                }
                localStorage.setItem('user', JSON.stringify(user));
            },
            (err) => {
                // this.messageService.add({
                //     severity: 'error',
                //     summary: 'Error',
                //     detail: err.message,
                // });
                const { error } = err;
                alert(error.message);
            }
        );
    }
}
