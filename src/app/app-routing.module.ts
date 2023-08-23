import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import PostDetailsComponent from "./pages/post-details/post-details.component";

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "posts/:id", component: PostDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
