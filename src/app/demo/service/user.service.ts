import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../api/user';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}
    private apiUrl = 'http://localhost:7500/api/auth/';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };
    Signup(user: User): Observable<any> {
        const url = `${this.apiUrl}/signup`;
        return this.http.post(url, user, this.httpOptions);
    }
    Signin(user: User): Observable<any> {
        const url = `${this.apiUrl}/signin`;
        return this.http.post(url, user, this.httpOptions);
    }
}
