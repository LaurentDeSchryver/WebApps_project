import { Component, OnInit,Input } from '@angular/core';
import { PostObject } from '../postObject.model';

import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  private _user$: BehaviorSubject<string>;
  private currentUser;

  private _posts :  PostObject[];
  private _postsI: PostObject[];

  constructor(private postService: PostDataService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._user$ = new BehaviorSubject<string>(this.currentUser && this.currentUser.username);
    this._posts = new Array<PostObject>();
    this._postsI=new Array<PostObject>();
   
  }

  get posts():PostObject[]{
    return this._posts;
  }

  ngOnInit() {
  
    
    
    this.postService.posts.subscribe(items => items.forEach(item=>{
      
      if(item.posterid==this.currentUser.username &&item.title != null && item.title!=''){
              this._posts.push(item);
            }
    }));

    
    

    }

   
  
 

}
