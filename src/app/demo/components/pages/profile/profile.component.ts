import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    constructor(private router: Router) {}
    getUser: any = {};
    user: any;
    ngOnInit() {
        this.getUser = localStorage.getItem('user');
        if (this.getUser) {
            this.user = JSON.parse(this.getUser);
            console.log(this.user);
        } else {
            this.router.navigate(['/']);
        }
    }
}
