import { NgModule } from '@angular/core';
import { PostsListComponent } from './posts-list/posts-list.component';
import { JphService } from './services/jph.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { jphRoutes } from './jph.routes';

@NgModule({
    imports: [CommonModule, HttpClientModule, jphRoutes],
    exports: [],
    declarations: [PostsListComponent],
    providers: [JphService],
})
export class JphModule { }
