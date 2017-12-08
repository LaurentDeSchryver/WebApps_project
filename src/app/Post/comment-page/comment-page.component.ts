import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { PostObject } from '../postObject.model';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit{

  private _post :PostObject;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostDataService
  ) {}
  

  ngOnInit() {
    this.route.params
    .map(params => params['idkey'])
    .subscribe((params) => {
      console.log(params);
     this.postService.getPost(params).subscribe(item=> this._post = item);
     
     
        
      })
  }
  get post():PostObject{
    return this._post;
  }

}
