import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "src/app/app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
    declarations: [AllCoursesComponent, CourseCardComponent],
    imports: [AppRoutingModule, ReactiveFormsModule, HttpClientModule],
    providers: [],
    exports: []
})

export class CourseModule { }