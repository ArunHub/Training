import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const loginRoutes: Routes = [
    {
        path: '', component: LoginComponent
    }
]

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forChild(loginRoutes)]
})
export class LoginRoutingModule {

}