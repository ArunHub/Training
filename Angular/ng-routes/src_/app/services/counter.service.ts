import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../models/appState';

@Injectable()
export class CounterService {

    constructor(private store: Store<AppState>) { }

    // getCurrentValue(): Observable<number> {
    //     return this.store.select(appState => appState.counter.currentValue)
    //         .filter(Boolean);
    // }

}