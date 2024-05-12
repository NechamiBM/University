import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Category } from "src/model/category.model";

@Injectable()
export class CategoryService {
    constructor(private _http: HttpClient) { }

    getCategories(): Observable<Category[]> {
        return this._http.get<Category[]>("/api/Category");
    }

    getCategory(categoryId: number): Observable<Category> {
        return this._http.get<Category>(`/api/Category/${categoryId}`);
    }
}
