import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/model/user.model';
import { USERS } from './user-list';

@Injectable()
export class UserService {
    login(user: User): Observable<User> {
        return of(user);
    }

    register() {

    }


    private currentUserSubject = new BehaviorSubject<User>(null);
    currentUser$ = this.currentUserSubject.asObservable();

    constructor(private _http: HttpClient) { }
    getUsers(): Observable<User[]> {
        return of(USERS);
    }

    getLecturers(): Observable<User[]> {
        let lecturers = USERS.filter((user) => user.isLecturer);
        console.log(lecturers);
        return of(lecturers);
    }

    setUsers(user: User): boolean {
        USERS.push(user);
        console.log(USERS);
        return true;
    }

    setCurrentUser(user: User) {
        this.currentUserSubject.next(user);
    }

    getCurrentUser() {
        return this.currentUserSubject.value;
    }
}
