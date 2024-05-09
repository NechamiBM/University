import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Course } from "src/model/course.model";
import { COURSES } from "./course-list";

@Injectable()
export class CourseService {
    constructor(private _http: HttpClient) { }

    // getCourses(): Observable<Course[]> {
    //     return this._http.get<Course[]>("/api/course");
    // }
    getCourses(): Observable<Course[]> {
        return of(COURSES);
    }

    addCourse(course:Course): Observable<any> {
        return of(course);
    }

    updateCourse(course:Course): Observable<any> {
        return of(course);
    }
}
