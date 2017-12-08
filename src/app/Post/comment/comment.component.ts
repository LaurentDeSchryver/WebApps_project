import { Component, OnInit, Input } from '@angular/core';
import { PostObject } from '../postObject.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { PostDataService } from '../post-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() post: PostObject;
  private realPost : PostObject;
  private _postssub :  PostObject[];
  
  public showme : boolean;
  private comment: FormGroup;
  private _user$: BehaviorSubject<string>;
  private currentUser;

  constructor(private _postDataService: PostDataService,private fb: FormBuilder,private router: Router) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._user$ = new BehaviorSubject<string>(this.currentUser && this.currentUser.username);
  }

  ngOnInit() {
    

    this._postDataService.getPost(this.post._id).subscribe(rec=>
      this._postssub = rec.comments
      

    
    )
    
    
   

    
    this.showme = false;
    this.comment = this.fb.group({
     
      description: ['', [Validators.required, Validators.minLength(2)]]
    
    });
    
    
  }

  get postssub():PostObject[]{
    return this._postssub;
  }
  onSubmit(empForm: any, event: Event){
    event.preventDefault();
    
    
    const newPost = new PostObject(this.comment.value.description,null,null,null,this.currentUser.username);
  
    
    this._postDataService.addCommentToPost(newPost,this.post._id);
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
