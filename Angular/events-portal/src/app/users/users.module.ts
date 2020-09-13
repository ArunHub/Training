import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from '@angular/common';
import { usersRoutes } from './users.routes';
import { HttpClientModule } from '@angular/common/http';
import { JphService } from '../jph/services/jph.service';

@NgModule({
    imports: [CommonModule, usersRoutes, HttpClientModule],
    exports: [],
    declarations: [UsersListComponent],
    providers: [JphService],
})
export class UsersModule { }
