import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SepHomeComponent } from "./sep-home/sep-home.component";

const homeRoutesConfig: Routes = [
    {path: '', component: SepHomeComponent}
];

export const homeRoutes: ModuleWithProviders = RouterModule.forChild(homeRoutesConfig);