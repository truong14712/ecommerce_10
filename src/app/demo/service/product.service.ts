import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Product } from '../api/product';
@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}
    // https://fakestoreapi.com/products
    private apiUrl = 'http://localhost:8000/api';
    getAllProduct(): Observable<any> {
        return this.http.get(`${this.apiUrl}/products`);
    }
    getDetail(id: string): Observable<any> {
        const url = `${this.apiUrl}/product/${id}`;
        return this.http.get<any>(url);
    }

    createProduct(product: Product): Observable<any> {
        return this.http.post<any>(this.apiUrl, product);
    }

    updateProduct(id: string, product: Product): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<any>(url, product);
    }

    deleteProduct(id: string): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<any>(url);
    }
}
