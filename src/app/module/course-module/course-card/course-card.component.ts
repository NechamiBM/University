import { Component, Input, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Course } from 'src/model/course.model';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input()
  course: Course;
}
