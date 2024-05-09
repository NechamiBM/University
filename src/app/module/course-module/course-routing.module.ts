import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';

const routes: Routes = [
    { path: "", redirectTo: "all", pathMatch: 'full' },
    { path: "all", component: AllCoursesComponent },
    { path: "add", component: AddEditCourseComponent },
    { path: "edit", component: AddEditCourseComponent },
    { path: "**", component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }
