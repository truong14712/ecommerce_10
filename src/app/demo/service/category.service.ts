import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Category } from '../api/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    constructor(private http: HttpClient) {}
    private apiUrl = 'http://localhost:8000/api/categories';
    getAllCategory(): Observable<any> {
        return this.http.get(`${this.apiUrl}`);
    }

    // getDetail(id: string): Observable<any> {
    //     const url = `${this.apiUrl}/${id}`;
    //     return this.http.get<any>(url);
    // }

    createCategory(category: Category): Observable<any> {
        return this.http.post<any>(this.apiUrl, category);
    }

    updateCategory(id: string, category: Category): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<any>(url, category);
    }

    deleteCategory(id: string): Observable<any> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<any>(url);
    }
}
