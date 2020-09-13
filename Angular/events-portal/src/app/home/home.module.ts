import { NgModule } from '@angular/core';
import { SepHomeComponent } from './sep-home/sep-home.component';
import { CommonModule } from '@angular/common';
import { homeRoutes } from './home.routes';

@NgModule({
    imports: [CommonModule, homeRoutes],
    exports: [],
    declarations: [SepHomeComponent],
    providers: [],
})
export class HomeModule { }
