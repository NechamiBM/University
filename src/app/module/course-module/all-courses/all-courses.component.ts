import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Course } from 'src/model/course.model';
import { CourseService } from '../course.service';
import { Category } from 'src/model/category.model';
import { CategoryService } from '../categort.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  courses: Course[];
  filteredCourses: Course[];
  categories: Category[];
  categoriesForm = new FormControl('');
  filterValue: string = '';

  constructor(private courseService: CourseService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
      this.filteredCourses = courses;
    });
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  filterCoursesByName() {
    console.log(this.filterValue);
    this.filteredCourses = this.filteredCourses.filter(course =>
      course.name.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

  filterCoursesByCategories() {
    console.log(this.categoriesForm.value);
    const selectedCategories = this.categoriesForm.value;
    this.filteredCourses = this.filteredCourses.filter(course => {
      // selectedCategories.indexOf(course.id + '') != -1
       selectedCategories.some(category => course.categoryId === category);
    });
  }
}

