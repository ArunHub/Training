import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { JphService } from "../../jph/services/jph.service";

@Component({
    selector: 'users-list',
    templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit{
    ngOnInit(): void {
        this._jphService.getAllUsers().subscribe(
            data => this.users = data,
            erro => console.log(erro),
            () => console.log('Jph service users fetched done')            
        )
    }

    pageTitle: string = "Synechron Users List";
    subTitle: string = "Published by HR Team";
    users: User[] = [];

    constructor(private _jphService: JphService){

    }

}