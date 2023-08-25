import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import {authGuard} from "./guards/auth.guard";
import {AuthComponent} from "./components/auth/auth.component";

const routes: Routes = [
  { path: "", component: PostListComponent, canActivate: [authGuard] },
  { path: "auth", component: AuthComponent},
  { path: "posts/:id", component: PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
