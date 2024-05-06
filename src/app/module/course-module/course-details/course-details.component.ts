import { Component, Input } from '@angular/core';
import { Course } from 'src/model/course.model';

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  @Input()
  course: Course;
}
