import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate(): boolean {
            
        // const isAdmin = localStorage.getItem('isAdmin') === 'true';
        if (isAdmin) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
