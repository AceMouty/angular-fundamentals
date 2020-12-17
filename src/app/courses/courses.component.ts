import { Component, OnInit } from '@angular/core';
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
    this.coursesService.delete(courseId);
  }

  cancel() {
    this.resetSelectedCourse();
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService.update(course);
    } else {
      this.coursesService.create(course)
        .subscribe(_ => this.loadCourses());
    }
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
