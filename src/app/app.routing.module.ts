import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostlistComponent } from './posts/postlist/postlist.component';
import { TopiccreateComponent } from './topics/topiccreate/topiccreate.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: "", component: PostlistComponent },
  { path: "createtopic", component: TopiccreateComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
