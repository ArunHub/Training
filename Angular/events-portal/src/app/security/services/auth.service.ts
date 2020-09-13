import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Token } from '../models/token';
import { User } from '../models/user';


@Injectable()
export class AuthService {
    constructor(private _httpClient: HttpClient) {
        
    }

    checkCredentials(user: User): Observable<Token> {
        return this._httpClient.post<Token>("http://localhost:9090/synauth", user);
    }
}