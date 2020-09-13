import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Token } from '../models/token';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'sep-login',
    templateUrl: "./sep-login.component.html"
})

export class SepLoginComponent implements OnInit {
    constructor(private _authService: AuthService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.returnUrl = this._activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    }
    pageTitle: string = "welcome to SEMP login";
    user: User = new User();
    token: Token;
    returnUrl: string;
    onCredentialCheck(): void {
        this._authService.checkCredentials(this.user).subscribe(
            data => {
                this.token = data;
                console.log(this.token);
                if (this.token.success == true) {
                    sessionStorage.setItem("token", JSON.stringify(this.token));
                    this._router.navigateByUrl(this.returnUrl);
                }
            },
            err => console.log(err),
            () => console.log("Service call completed!")
        )
    }
}