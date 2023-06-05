import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Category } from '../api/category';


@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor(private http: HttpClient) {}
    private apiUrl = 'http://localhost:7500/api/carts';
    getAllCart(): Observable<any> {
        return this.http.get(`${this.apiUrl}`);
    }
    

    getCartById(id: string): Observable<any> {
        const url = `${this.apiUrl}/find/${id}`;
        return this.http.get<any>(url);
    }

    createCart(cart:any): Observable<any> {
        return this.http.post<any>(this.apiUrl,cart);
    }

    updateCart(cart:any): Observable<any> {
        const url = `${this.apiUrl}/update`;
        return this.http.post<any>(url,cart);

    }

    deleteCart(id: string | undefined): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<any>(url);
    }
}
