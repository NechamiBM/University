// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Category } from 'src/model/category.model';
// import { CourseService } from '../course.service';
// import { CategoryService } from '../categort.service';

// @Component({
//   selector: 'add-edit-course',
//   templateUrl: './add-edit-course.component.html',
//   styleUrls: ['./add-edit-course.component.css']
// })
// export class AddEditCourseComponent {
//   courseForm: FormGroup;
//   categories: Category[];

//   constructor(private fb: FormBuilder, private courseService: CourseService, private categoryService: CategoryService) { }


//   ngOnInit(): void {
//     this.courseForm = this.fb.group({
//       name: ['', Validators.required],
//       categoryId: [null, Validators.required],
//       lessonsCount: ['', Validators.required],
//       startDate: ['', Validators.required],
//       syllabus: [[]], 
//       instructionMode: ['', Validators.required],
//       lecturerId: ['', Validators.required],
//       image: ['', [Validators.required, Validators.pattern('(https?://.*\.(?:png|jpg|svg))')]] 
//     });

//     // Assuming you have a service to fetch categories
//     this.categoryService.getCategories().subscribe(categories => {
//       this.categories = categories;
//     });
//   }

//   onSubmit() {
//     if (this.courseForm.valid) {
//       // Call your service method to add the course
//       // this.courseService.addCourse(this.courseForm.value).subscribe(...);
//       console.log(this.courseForm.value);
//     } else {
//       // Display error message or handle invalid form
//     }
//   }
// }

import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/model/category.model';
import { CourseService } from '../course.service';
import { CategoryService } from '../categort.service';

@Component({
  selector: 'add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.css']
})
export class AddEditCourseComponent {
  courseForm: FormGroup;
  categories: Category[];

  constructor(private fb: FormBuilder, private courseService: CourseService, private categoryService: CategoryService) { }


  ngOnInit(): void {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      categoryId: [null, Validators.required],
      lessonsCount: ['', Validators.required],
      startDate: ['', Validators.required],
      syllabus: this.fb.array([]), // Initialize as an empty array
      instructionMode: ['', Validators.required],
      lecturerId: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('(https?://.*)')]] // URL pattern validation
    });

    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

    this.addEmptySyllabusField();
  }

  onSubmit() {
    this.removeEmptySyllabusFields(); // Remove any empty syllabus fields before submission
    if (this.courseForm.valid) {
      // Call your service method to add the course
      // this.courseService.addCourse(this.courseForm.value).subscribe(...);
      console.log(this.courseForm.value);
    } else {
      // Display error message or handle invalid form
    }
  }

  addEmptySyllabusField() {
    const syllabusArray = this.courseForm.get('syllabus') as FormArray;
    console.log("before", syllabusArray.value);

    syllabusArray.push(this.fb.control(''));
    console.log("after", syllabusArray.value);
  }

  removeEmptySyllabusFields() {
    const syllabusArray = this.courseForm.get('syllabus') as FormArray;
    console.log("remove", syllabusArray.value);

    for (let i = syllabusArray.length - 1; i >= 0; i--)
      if (!syllabusArray.at(i).value.trim())
        syllabusArray.removeAt(i);
  }

  //   onInput(event: Event, index: number): void {
  //     const target = event.target as HTMLInputElement;
  //     const value = target.value.trim();
  //     if (value && index === this.syllabusList.length - 1) {
  //         this.syllabusList.push(value);
  //     } else if (!value && index < this.syllabusList.length - 1) {
  //         this.syllabusList.splice(index + 1, 1);
  //     }
  //     console.log(this.syllabusList);
  // }

  onSyllabusFieldChange(event: Event, index: number) {
    const target = event.target as HTMLInputElement;
    const value = target.value.trim();

    const lastSyllabusIndex = (this.courseForm.get('syllabus') as FormArray).length - 1;
    const lastSyllabusValue = (this.courseForm.get('syllabus') as FormArray).at(lastSyllabusIndex).value;

    console.log(lastSyllabusIndex, "lastSyllabusIndex");
    console.log("value", value, "index", index);

    // lastSyllabusValue.trim() !== ''
    if (value && index === lastSyllabusIndex)
      this.addEmptySyllabusField();
    else
      this.removeEmptySyllabusFields();

  }
}

