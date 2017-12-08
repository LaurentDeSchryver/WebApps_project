
import { Component, OnInit, Input } from '@angular/core';
import { PostObject } from '../postObject.model';
import { PostDataService } from '../post-data.service';

import { FormGroup ,NgModel ,FormBuilder, Validators, FormArray } from '@angular/forms'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-object-detail',
  templateUrl: './post-object-detail.component.html',
  styleUrls: ['./post-object-detail.component.css']
})
export class PostObjectDetailComponent implements OnInit {

  @Input() post: PostObject;
  
  public showme : boolean;
  private comment: FormGroup;
  private _user$: BehaviorSubject<string>;
  private currentUser;

  constructor(private _postDataService: PostDataService,private fb: FormBuilder,private router: Router) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._user$ = new BehaviorSubject<string>(this.currentUser && this.currentUser.username);
  }

  ngOnInit() {

    console.log("storn");
    this.showme = false;
    this.comment = this.fb.group({
     
      description: ['', [Validators.required, Validators.minLength(2)]]
    
    });
    
    
  }
  onSubmit(empForm: any, event: Event){
    event.preventDefault();
    
    
    const newPost = new PostObject(this.comment.value.description,null,new Array<PostObject>(),null,this.currentUser.username);
  
    
    this._postDataService.addCommentToPost(newPost,this.post.id);
    this.showme=false;

  }
  showbox(){
    this.showme = true;
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
