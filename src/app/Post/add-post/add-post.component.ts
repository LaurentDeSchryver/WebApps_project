import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {PostObject} from '../postObject.model';
import { FormGroup ,NgModel ,FormBuilder, Validators, FormArray } from '@angular/forms';
import { PostDataService } from '../post-data.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs/Rx';



@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  private _user$: BehaviorSubject<string>;
  private currentUser;
  
  private post: FormGroup;
  $scope = "^(http[s]?:\\/\\/){0,1}(www\\.){0,1}[a-zA-Z0-9\\.\\-]+\\.[a-zA-Z]{2,5}[\\.]{0,1}$"

  ngOnInit() {
    this.post = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      photourl: ['', [Validators.required, Validators.pattern("https?://.+")]]

    });
  }
  constructor(private fb: FormBuilder, private _postDataService: PostDataService,private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this._user$ = new BehaviorSubject<string>(this.currentUser && this.currentUser.username);
   }

  

  
  
  onSubmit(){
    
    const newPost = new PostObject(this.post.value.title,this.post.value.description,null,this.post.value.photourl,this.currentUser.username);

   this._postDataService.addNewPost(newPost).subscribe();
    this.router.navigate(['/Post/homepage']);
   
    }
  


}
