import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './module/course-module/all-courses/all-courses.component';

const routes: Routes = [
  { path: "", redirectTo: "courses/all", pathMatch: 'full' },
  { path: "courses/all", component: AllCoursesComponent },
  // { path: "**", redirectTo: "employees", pathMatch: 'full' }
  // { path: "", component: HomePageComponent },
  // { path: "login", component: LoginComponent },
  // { path: "register", component: RegisterComponent },
  // { path: "logout", component: LogoutComponent },
  // { path: "allCourses", component: AllCoursesComponent },
  // { path: "addCourse", component: AddCourseComponent },
  // { path: "courseDetails/:id", component: CourseDetailsComponent },
  // { path: 'editCourse/:id', component: AddCourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
