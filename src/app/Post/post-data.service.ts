import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { PostObject } from './postObject.model';
import { AuthenticationService} from '../user/authentication.service'
import { Output } from '@angular/core/src/metadata/directives';
import { PostObjectComponent } from './post-object/post-object.component';


@Injectable()
export class PostDataService {

  private _appUrl = 'http://localhost:4200/API/posts/';
  private _posts;

  constructor(private http:Http,private auth: AuthenticationService) { }

  get posts(): Observable<PostObject[]> {
    return this.http.get(this._appUrl).map(response =>
      response.json().map(item =>
        PostObject.fromJSON(item)
      )
    );
  }

  updatePost(rec){
    this.http.put(this._appUrl+rec._id,rec).subscribe();
    

     }

  addNewPost(rec): Observable<PostObject> {

     return this.http.post(`${this._appUrl}`, rec,{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
     .map(res => res.json()).map(item => PostObject.fromJSON(item))
    
  }

  getPost(rec_id):Observable<PostObject>{
    return this.http.get(`${this._appUrl}`+ rec_id,{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(res => res.json()).map(item => PostObject.fromJSON(item))
  }
  addComment(rec){
    this.http.put(this._appUrl+rec.id,rec).subscribe();
  }
  addCommentToPost(com:PostObject, post: string) {
    this.http.post(this._appUrl+post+'/comments',com).subscribe();
  }

}

