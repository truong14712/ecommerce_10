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
    private apiUrl = 'http://localhost:7500/api';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };
    getAllProduct(): Observable<any> {
        const url = `${this.apiUrl}/products`;
        return this.http.get(url, this.httpOptions);
    }
    getDetail(id: string): Observable<any> {
        const url = `${this.apiUrl}/products/find/${id}`;
        return this.http.get<any>(url, this.httpOptions);
    }

    createProduct(product: Product): Observable<any> {
        const url = `${this.apiUrl}/products`;

        return this.http.post<any>(url, product, this.httpOptions);
    }

    updateProduct(product: Product): Observable<any> {
        const url = `${this.apiUrl}/products/${product._id}`;
        const {_id,__v,...newData}=product
        console.log('newData',newData)
        return this.http.put<any>(url,newData, this.httpOptions);
    }

    deleteProduct(id: string | undefined): Observable<any> {
        const url = `${this.apiUrl}/products/${id}`;
        return this.http.delete<any>(url);
    }
}
