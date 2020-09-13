import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from 'src/app/components/login/models/token';
import { HttpClient } from '@angular/common/http';
import { User } from '../../components/login/models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(
        private _router: Router,
        private _http: HttpClient) { }

    isLoggedin: boolean = false;
    isManagerLogged: boolean = false;
    redirectUrl: string;

    checkLogin(user: User): Observable<Token> {
        const { username, isManager }: User = user;
        return this._http.post<Token>('http://localhost:8888/empauth', { username, isManager });
    }

    logout(): void {
        this.isLoggedin = false;
    }
}