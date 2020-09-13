import { Component, OnInit } from '@angular/core';

import { Post } from '../models/post';
import { JphService } from '../services/jph.service';

@Component({
    selector: 'posts-list',
    templateUrl: './posts-list.component.html'
})

export class PostsListComponent implements OnInit {
    constructor(private _jphService: JphService) { }

    ngOnInit() {
        this._jphService.getAllPosts().subscribe(
            data => this.posts = data,
            erro => console.log(erro),
            () => console.log("Jph Posts service call completed")
        )
    }

    pageTitle: string = "JsonPlaceHolder posts List";
    posts: Post[] = [];
}