import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Display courses using ngFor
  // STEP 02: Add event handler to select course
  // STEP 03: Display raw json of selected course

  // Challenge: HTTP Client
  // Step 01: Complete remote update call
  // Step 02: Complete remote delete call
  // Step 03: Fix UI on completed submission

  courses = null;
  selectedCourse = null;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses()
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    }

    this.selectedCourse = emptyCourse;
  }

  setCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId) {
    console.log("COURSE ID: ", courseId)
    this.coursesService.delete(courseId)
      .subscribe(_ => this.loadCourses());
  }

  cancel(form: NgForm) {
    // this.loadCourses();
    form.resetForm();
    this.resetSelectedCourse();
  }

  saveCourse(eventObj) {

    const { course, form } = eventObj;

    if (course.id) {
      this.coursesService.update(course)
        .subscribe(_ => this.loadCourses());
    } else {
      this.coursesService.create(course)
        .subscribe(_ => this.loadCourses());
    }

    form.resetForm();
  }

  loadCourses() {
    this.coursesService.getAll()
      .subscribe(courses => this.courses = courses)
  }

  setFavorite(checked: boolean) {
    this.selectedCourse.favorite = checked;
    console.log("CHECKED: ", checked)
  }
}
