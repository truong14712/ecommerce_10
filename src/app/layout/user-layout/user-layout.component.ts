import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/demo/api/user';

@Component({
    selector: 'app-user-layout',
    templateUrl: './user-layout.component.html',
    styleUrls: ['./user-layout.component.scss'],
})
export class UserLayoutComponent implements OnInit {
    constructor(private Router: Router) {}
    getUser: any = {};
    user!: User;
    ngOnInit() {
        this.getUser = localStorage.getItem('user');
        if (this.getUser) {
            this.user = JSON.parse(this.getUser);
            console.log(this.user);
        }
    }
    Logout() {
        if (this.user) {
            localStorage.removeItem('user');
            localStorage.removeItem('isAdmin');
            this.Router.navigate(['/login']);
        }
    }
}
