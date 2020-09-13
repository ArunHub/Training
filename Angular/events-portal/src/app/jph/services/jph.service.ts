import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Post } from "../models/post";
import { User } from "../../users/models/user";

@Injectable({providedIn:'root'})
export class JphService {
    constructor(private _httpClient: HttpClient) {
        
    }

    getAllPosts(): Observable<Post[]> {
        return this._httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
    }

    getAllUsers(): Observable<User[]> {
        return this._httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
    }
}