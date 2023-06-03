import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    constructor() {}
    getUser: any = {};
    user: any;
    ngOnInit() {
        this.getUser = localStorage.getItem('user');
        if (this.getUser) {
            this.user = JSON.parse(this.getUser);
            console.log(this.user);
        }
    }
}
