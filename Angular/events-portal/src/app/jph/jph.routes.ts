import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostsListComponent } from "./posts-list/posts-list.component";

const jphRoutesConfig: Routes = [
    {path: 'posts', component: PostsListComponent}
];

export const jphRoutes: ModuleWithProviders = RouterModule.forChild(jphRoutesConfig);