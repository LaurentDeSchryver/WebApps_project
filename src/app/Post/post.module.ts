import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import{HomePageComponent} from './home-page/home-page.component';
import{PostObjectComponent} from './post-object/post-object.component';
import{AddPostComponent} from './add-post/add-post.component';
import{MyPostsComponent} from './my-posts/my-posts.component';
import { PostDataService } from './post-data.service';
import{CommentPageComponent} from './comment-page/comment-page.component'
import { PostObjectDetailComponent } from './post-object-detail/post-object-detail.component';
import { CommentComponent } from './comment/comment.component';

const routes = [
  { path: 'homepage', component: HomePageComponent },
  {path: 'addpost', component: AddPostComponent },
  {path:'myposts',component:MyPostsComponent},
  {path:':id',component:CommentPageComponent}
 // { path: 'add', component: AddRecipeComponent },
 // { path: ':id', component: RecipeDetailComponent,
//    resolve: { recipe: RecipeResolver} }
];

@NgModule({
  declarations: [
   HomePageComponent,
   PostObjectComponent,
   AddPostComponent,
   MyPostsComponent,
   CommentPageComponent,
   PostObjectDetailComponent,
   CommentComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: [
    PostDataService
  ],
})
export class PostModule { }
