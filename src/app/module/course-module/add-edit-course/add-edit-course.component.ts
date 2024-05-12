import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/model/category.model';
import { CourseService } from '../course.service';
import { CategoryService } from '../categort.service';
import { Course } from 'src/model/course.model';
import { Router } from '@angular/router';
import { StateService } from 'src/app/state.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.css']
})
export class AddEditCourseComponent {
  course: Course;
  courseForm: FormGroup;
  categories: Category[];

  constructor(private fb: FormBuilder, private courseService: CourseService, private categoryService: CategoryService,
    private router: Router, private stateService: StateService) { }

  ngOnInit(): void {
    if (this.router.url == "/course/edit")
      this.course = this.stateService.getData();
    this.courseForm = this.fb.group({
      name: [this.course?.name, Validators.required],
      categoryId: [this.course?.categoryId, Validators.required],
      lessonsCount: [this.course?.lessonsCount, [Validators.required, Validators.min(1)]],
      startDate: [this.course?.startDate, Validators.required],
      syllabus: this.fb.array(this.course?.syllabus.map(item => this.fb.control(item)) || [this.fb.control('')]), 
      instructionMode: [this.course?.instructionMode, Validators.required],
      image: [this.course?.image, [Validators.required, Validators.pattern('(https?://.{5,})')]]
    });

    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onSubmit() {
    const id = this.course?.id;
    this.course = this.courseForm.value;
    this.course.syllabus = this.course.syllabus.filter(s => s.length != 0);
    this.course.lecturerId = +sessionStorage.getItem("userId");
    this.course.id = id;
    if (this.course.id) {
      this.courseService.updateCourse(this.course).subscribe(() => {
        Swal.fire({
          text: "Course updated successfully", icon: "success", showConfirmButton: false, timer: 1500
        });
        this.router.navigate(['course/all']);
      }, () => {
        Swal.fire({
          title: "Oops...", text: "Something went wrong...", icon: "error", showConfirmButton: false, timer: 1500
        });
      }
      );
    } else {
      this.courseService.addCourse(this.course).subscribe((res) => {
        Swal.fire({
          text: "Course added successfully", icon: "success", showConfirmButton: false, timer: 1500
        });
        this.router.navigate(['course/all']);
      }, () => {
        Swal.fire({
          title: "Oops...", text: "Something went wrong...", icon: "error", showConfirmButton: false, timer: 1500
        });
      });
    }
  }


  onCancel() {
    this.stateService.setData('');
    this.router.navigate(['course/all']);
  }

  get syllabusForms() {
    return this.courseForm.get('syllabus') as FormArray;
  }

  removeSyllabus(index: number) {
    if (this.syllabusForms.value != null)
      this.syllabusForms.removeAt(index);
  }

  onInputDelete(event: Event, index: number) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const length = (this.courseForm.get('syllabus') as FormArray).length;
    if (length !== 1 && !value && this.syllabusForms.at(index).dirty)
      this.removeSyllabus(index);
  }

  onSyllabusKeyPress(event: KeyboardEvent, index: number) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const lastSyllabusIndex = (this.courseForm.get('syllabus') as FormArray).length - 1;
    if (value && event.key === 'Enter') {
      event.preventDefault();
      if (index == lastSyllabusIndex)
        this.syllabusForms.push(this.fb.control(''));
      const nextSyllabusControl = this.syllabusForms.at(index + 1);
      nextSyllabusControl.markAsTouched();
      setTimeout(() => {
        const nextInput: HTMLElement = document.querySelector(`.form-field-syl:nth-child(${index + 2}) input`);
        nextInput.focus();
      });
    }
  }

  clearSyllabus(event: Event, index: number) {
    const syllabusForms = this.courseForm.get('syllabus') as FormArray;
    syllabusForms.at(index).setValue('');
    this.onInputDelete(event, index);
  }

  filterDate = (d: Date | null): boolean =>
    (d || new Date()).getDay() !== 6 && d > new Date;

}

