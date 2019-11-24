import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from "./pages/users/users.component";
import { PostsComponent} from "./pages/posts/posts.component"

const routes: Routes = [
  {path: "users", component: UsersComponent },
  {path: "posts", component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
