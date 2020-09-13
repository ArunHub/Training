import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SepMenuComponent } from './sep-menu/sep-menu-component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [SepMenuComponent],
    declarations: [SepMenuComponent],
    providers: [],
})
export class NavigationModule {}
