import { Component, OnInit,Input } from '@angular/core';
import { PostObject } from '../postObject.model';

import { Observable } from 'rxjs/Rx';
import { PostDataService } from '../post-data.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  
})
export class HomePageComponent implements OnInit {
  
  private _posts :  PostObject[];
  constructor(private postService: PostDataService) {
    this._posts = new Array<PostObject>();
  }

  get posts():PostObject[]{
    return this._posts;
  }

  ngOnInit() {
    this.postService.posts.subscribe(items => items.forEach(item=>{
      
      if(item.title != null && item.title!=''){
              this._posts.push(item);
            }
    }));
    
   
  }
 

}
