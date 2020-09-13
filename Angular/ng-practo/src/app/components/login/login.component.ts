import { Component, OnInit, DoCheck } from '@angular/core';

import { LoginForm } from './models/login-form';
import { Router, ActivatedRoute } from '@angular/router';
import { tap, delay } from 'rxjs/operators';

import { User } from './models/user';
import { MenuService } from '../menu/menu.service';
import { SharedService } from '../../shared/services/shared.service';
import { AuthService } from '../../shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {    
    this.returnUrl = this._activatedRoute.snapshot.queryParams['returntourl'] || '/';
  }
  
  returnUrl: string;
  constructor(
    private _authService: AuthService,
    private _sharedService: SharedService,
    private _router: Router, private _activatedRoute: ActivatedRoute) { }

  form: LoginForm = new LoginForm();

  onSubmit() {
    this._authService.checkLogin(this.form.loginForm.value).pipe(delay(2000)).subscribe(
      data => {
        if(data.success === false){
          // shared alert notifications
          this.form.loginForm.setErrors({username: 'dfd'})
        }else{
        sessionStorage.setItem('token', JSON.stringify(data.token));
        this._sharedService.broadcastUsername(this.form.loginForm.value.username);

        if(this.form.loginForm.value.isManager) this._authService.isManagerLogged = true;        
        this._router.navigateByUrl(this.returnUrl);
      }
      },
      error => {
        console.log('erorr', error);
      },
      () => {
        this.form.loginForm.reset();
      }
    );
    // this.form.loginForm.reset();
  }



}
