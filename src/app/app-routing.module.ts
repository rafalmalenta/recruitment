import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from "./pages/users/users.component";
import { PostsComponent} from "./pages/posts/posts.component"
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  {path:"", component: StartComponent },
  {path: "users/:page", component: UsersComponent ,runGuardsAndResolvers: 'always',},
  {path: "viewUsers/1", component: UsersComponent},
  {path: "users/11", component: StartComponent},
  
  {path: "posts", component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
