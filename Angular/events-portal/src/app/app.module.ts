import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavigationModule } from "./navigation/navigation.module";
import { appRoutes } from "./app.routes";
import { SepLoginComponent } from "./security/sep-login/sep-login.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./security/services/auth.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [BrowserModule, NavigationModule, appRoutes, FormsModule, HttpClientModule],
    exports: [],
    declarations: [AppComponent, SepLoginComponent],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}