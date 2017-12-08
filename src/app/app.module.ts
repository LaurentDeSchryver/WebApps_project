import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomePageComponent } from './Post/home-page/home-page.component';
import { AddPostComponent } from './Post/add-post/add-post.component';
import {MyPostsComponent} from './Post/my-posts/my-posts.component';



import { AppRoutingModule } from './app-routing/app-routing-module';
//import { RecipeModule } from './recipe/recipe.module';
import {RouterModule} from '@angular/router';
import {UserModule} from './user/user.module';
import { PostObjectDetailComponent } from './Post/post-object-detail/post-object-detail.component';
import { CommentPageComponent } from './Post/comment-page/comment-page.component';
import { CommentComponent } from './Post/comment/comment.component';








@NgModule({
  declarations: [
    AppComponent,
    
    
  
    
    
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UserModule,
    HttpModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
