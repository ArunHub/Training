import { Component } from '@angular/core';
import { MenuService } from './menu.service';
import { Subscription } from 'rxjs';
import { SharedService } from '../../shared/services/shared.service';

@Component({
    selector: 'menu-bar',
    templateUrl: 'menu.component.html'
})

export class MenuComponent{

    constructor(private _menuService: MenuService, private _sharedService: SharedService
    ) {
        this._sharedService.profileName$.subscribe(
            data => {
                this.loginUser = data
            },
            err => console.log('eeeeeeeee', err),
        )
    }

    menuItems = this._menuService.menuItems;
    loginUser: string;
}