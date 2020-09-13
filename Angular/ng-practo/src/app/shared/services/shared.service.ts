import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SharedService {

    constructor() {
        
    }

    private _profileName = new Subject<string>();
    profileName$ = this._profileName.asObservable();


    broadcastUsername(name){
        this._profileName.next(name);       
    }
    

}