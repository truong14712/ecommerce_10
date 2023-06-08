import { Router } from '@angular/router';
import { Component, OnInit,DoCheck, ChangeDetectorRef } from '@angular/core';
import { User } from 'src/app/demo/api/user';

@Component({
    selector: 'app-user-layout',
    templateUrl: './user-layout.component.html',
    styleUrls: ['./user-layout.component.scss'],
})
export class UserLayoutComponent implements OnInit {
    constructor(private Router: Router,private cdr: ChangeDetectorRef) {
        
    }
    getUser: any = {};
    user: any;
    // ngOnInit() {
    //     this.getUser = localStorage.getItem('user');
        // if (this.getUser) {
        //     this.user = JSON.parse(this.getUser);
        //     console.log(this.user);
        // }
    // }
  
      
  ngOnInit() {
    this.getUserData();
  }

  ngDoCheck() {
    console.log('a');
    this.getUserData();
  }

  getUserData() {
    this.getUser = localStorage.getItem('user');
    if (this.getUser) {
        this.user = JSON.parse(localStorage.getItem('user') || '');
    }
    else{
      this.user=null
    }
    // Gọi đoạn code cần thực hiện khi dữ liệu user thay đổi
    // Ví dụ: this.fetchUserData();
    // Sau khi hoàn thành tác vụ, gọi hàm markForCheck() để báo cho Angular biết rằng có thay đổi dữ liệu và cần render lại component.
    this.cdr.markForCheck();
  }
    Logout() {
        if (this.user) {
            localStorage.removeItem('user');
            localStorage.removeItem('isAdmin');
            this.Router.navigate(['/login']);
        }
    }
}
