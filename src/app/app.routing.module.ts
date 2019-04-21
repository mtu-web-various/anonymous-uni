import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostlistComponent } from './posts/postlist/postlist.component';
import { TopiccreateComponent } from './topics/topiccreate/topiccreate.component';

const routes: Routes = [
  { path: "", component: PostlistComponent },
  { path: "createtopic", component: TopiccreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
