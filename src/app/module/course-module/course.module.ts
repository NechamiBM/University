import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "src/app/app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CourseDetailsComponent } from "./course-details/course-details.component";
import { CourseService } from "./course.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { CategoryService } from "./categort.service";
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { MatNativeDateModule } from "@angular/material/core";
import { MatChipsModule } from '@angular/material/chips';
import { IconPipe } from "./icon.pipe";

@NgModule({
    declarations: [AllCoursesComponent, CourseCardComponent, CourseDetailsComponent, AddEditCourseComponent,IconPipe],
    imports: [CommonModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, MatChipsModule, MatGridListModule, MatButtonModule, MatExpansionModule,
        MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule, MatFormFieldModule, MatButtonToggleModule, MatSelectModule],
    providers: [CourseService, CategoryService],
    exports: [AllCoursesComponent, AddEditCourseComponent]
})

export class CourseModule { }
