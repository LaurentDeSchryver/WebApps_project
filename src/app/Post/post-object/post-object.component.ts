import { Component, OnInit, Input } from '@angular/core';
import { PostObject } from '../postObject.model';
import { PostDataService } from '../post-data.service';
@Component({
  selector: 'app-post-object',
  templateUrl: './post-object.component.html',
  styleUrls: ['./post-object.component.css']
})
export class PostObjectComponent implements OnInit {
  
  @Input() post: PostObject;
  constructor(private _postDataService: PostDataService) { }

  ngOnInit() {
    
    
    
  }
  upvote(){
    this.post.upvote();
    this._postDataService.updatePost(this.post);
    
  }
  downvote(){
    this.post.downvote();
    this._postDataService.updatePost(this.post);
  }
  
 

}
