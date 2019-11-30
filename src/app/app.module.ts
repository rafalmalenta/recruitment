import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { StartComponent } from './pages/start/start.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { AddeditComponent } from './pages/addedit/addedit.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    StartComponent,
    PaginatorComponent,
    AddeditComponent,       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
