// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';

// import { createAction } from '../createAction';
// import { AppState } from '../../models/appState';

// @Injectable()
// export class SessionActions {

//     static LOGIN_USER_PENDING = 'LOGIN_USER_PENDING';
//     static LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
//     static LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
//     static LOGOUT_USER = 'LOGOUT_USER';

//     constructor(
//         private store: Store<AppState>,
//         private authService: AuthService
//     ) {

//     }

//     loginUser(credentials: any) {
//         this.store.dispatch(createAction(SessionActions.LOGIN_USER_PENDING));

//         this.authService.login(credentials.username, credentials.password)
//             .then(result => this.store.dispatch(createAction(SessionActions.LOGIN_USER_SUCCESS, result)))
//             .catch(() => this.store.dispatch(createAction(SessionActions.LOGIN_USER_ERROR)));
//     };

//     logoutUser() {
//         this.store.dispatch(createAction(SessionActions.LOGOUT_USER));
//     };

// }