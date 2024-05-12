import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Course } from "src/model/course.model";

@Injectable()
export class CourseService {
    constructor(private _http: HttpClient) { }

    getCourses(): Observable<Course[]> {
        return this._http.get<Course[]>("/api/Course");
    }

    addCourse(course: Course): Observable<any> {
        return this._http.post<Course>("api/Course", course);
    }
    
    updateCourse(course: Course): Observable<any> {
        return this._http.put<Course>(`/api/Course/${course.id}`, course);
    }
}
