import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpHeaders,
} from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const user = localStorage.getItem('user');
        const getUser = user ? JSON.parse(user) : null;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getUser?.accessToken}`,
        });

        const modifiedRequest = request.clone({ headers });
        return next.handle(modifiedRequest);
    }
}
