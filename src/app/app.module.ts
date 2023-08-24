import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import PostDetailsComponent from './pages/post-details/post-details.component';
import { LoaderComponent } from './shared/ui/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AuthFormComponent,
    PostComponent,
    MainPageComponent,
    PostDetailsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
