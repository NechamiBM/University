import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "course", pathMatch: 'full' },
  { path: "user", loadChildren: () => import('./module/user-module/user-routing.module').then(u => u.UserRoutingModule) },
  { path: "course", loadChildren: () => import('./module/course-module/course-routing.module').then(c => c.CourseRoutingModule) },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
