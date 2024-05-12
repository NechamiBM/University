import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StateService } from 'src/app/state.service';
import { Course } from 'src/model/course.model';
import { CategoryService } from '../categort.service';
import { Category } from 'src/model/category.model';

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  @Input()
  course: Course;

  category: Category;
  constructor(private _router: Router, private stateService: StateService, private _categotyService: CategoryService) { }

  ngOnInit() {
    this._categotyService.getCategory(this.course.categoryId).subscribe((category) => this.category = category);
  }

  isMyCourse() {
    return this.course.lecturerId == +sessionStorage.getItem('userId');
  }


  edit() {
    this.stateService.setData(this.course);
    this._router.navigate(['course/edit']);
  }
}
