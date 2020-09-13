import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MenuService {

    constructor() {   
    }

    menuItems: string[] = ['Home', 'Dashboard'];
}