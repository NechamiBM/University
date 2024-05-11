import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/user.model';

@Injectable()
export class UserService {

    constructor(private _http: HttpClient) { }

    login(user: User): Observable<User> {
        return this._http.post<User>("/api/User/login", user);
    }

    register(user: User): Observable<User> {
        return this._http.post<User>("/api/User/register", user);
    }
}
