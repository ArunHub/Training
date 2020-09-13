import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../../security/models/token';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-access-token': this.getToken()
            })
        });
        console.log("Interceptor")
        return next.handle(authReq);
    }
    token:Token;
    getToken(): string {
        this.token = <Token>JSON.parse(<string>sessionStorage.getItem("token"));
        return this.token.token;
    }
}