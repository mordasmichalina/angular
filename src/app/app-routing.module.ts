import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ErrorComponent } from './error/error.component';
import { BlankComponent } from './blank/blank.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './users/register/register.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostResolverService } from './services/post-resolver.service';
import { PostDetailResolverService } from './services/post-detail-resolver.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    resolve: {posts:PostResolverService}
  },
  {
    path: 'detail/:id',
    component: PostDetailComponent,
    resolve: {postDetail:PostDetailResolverService}
  },
  {
    path: '404',
    component: ErrorComponent
    },
  {
    path: 'new',
    component: NewPostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'singup',
    component: RegisterComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blank',
    component: BlankComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostsListComponent, PostDetailComponent]
