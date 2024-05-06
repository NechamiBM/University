import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

const routes: Routes = [
    { path: "", redirectTo: "all", pathMatch: 'full' },
    { path: "all", component: AllCoursesComponent },
    //   { path: "course/add", component: AddCourseComponent },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }
