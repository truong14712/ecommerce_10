import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Category } from '../api/category';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    constructor(private http: HttpClient) {}
    private apiUrl = 'http://localhost:7500/api/categories';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };
    getAllCategory(): Observable<any> {
        return this.http.get(`${this.apiUrl}`, this.httpOptions);
    }

    // getDetail(id: string): Observable<any> {
    //     const url = `${this.apiUrl}/${id}`;
    //     return this.http.get<any>(url);
    // }

    createCategory(category: Category): Observable<any> {
        return this.http.post<any>(this.apiUrl, category, this.httpOptions);
    }

    updateCategory(category: Category): Observable<any> {
        const url = `${this.apiUrl}/${category._id}`;
        return this.http.put<any>(
            url,
            {
                name: category.name,
            },
            this.httpOptions
        );
    }

    deleteCategory(id: string | undefined): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<any>(url);
    }
}
