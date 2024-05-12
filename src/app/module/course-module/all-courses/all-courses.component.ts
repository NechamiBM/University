import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Course } from 'src/model/course.model';
import { CourseService } from '../course.service';
import { Category } from 'src/model/category.model';
import { CategoryService } from '../categort.service';
import { FormControl } from '@angular/forms';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild(MatButtonToggleGroup) instructionModeToggle: MatButtonToggleGroup;

  courses: Course[];
  filteredCourses: Course[];
  categories: Category[];
  categoriesFilter: number;
  filterValue: string = '';

  constructor(private courseService: CourseService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => this.courses = this.filteredCourses = courses);
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
  }

  filterCourses() {
    const instructionMode = this.instructionModeToggle.value;
    this.filteredCourses = this.courses.filter(course =>
      course.name.toLowerCase().includes(this.filterValue.toLowerCase())
      && (this.categoriesFilter == undefined || course.categoryId == this.categoriesFilter)
      && (instructionMode == 'all' || instructionMode == undefined || course.instructionMode == instructionMode)
    );
  }

}

