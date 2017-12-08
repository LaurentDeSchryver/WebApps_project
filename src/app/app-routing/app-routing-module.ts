import { AuthGuardService } from './../user/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

//import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
// import { RecipeListComponent } from './../recipe-list/recipe-list.component';


const appRoutes: Routes = [
  {
    path: 'Post',
    canActivate: [ AuthGuardService ],
    //data: { preload: true },
    loadChildren: '../Post/post.module#PostModule'
  },
  { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  //{ path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
