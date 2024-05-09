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

  checkDate() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const nextWeek = new Date;
    nextWeek.setDate(nextWeek.getDate() + 7);
    return this.course.startDate >= today && this.course.startDate <= nextWeek;
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('userId');
  }
}
