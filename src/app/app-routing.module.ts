import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostListComponent } from "./components/post-list/post-list.component";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";
import {authGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: "", component: PostListComponent, canActivate: [authGuard] },
  { path: "posts/:id", component: PostDetailComponent, canDeactivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
