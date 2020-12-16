import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Challenge
  // Step 1: Create a lessonsService
  // hint ng g service shared/services/lessons -d
  // Step 2: add the lessons service to the app module
  // Step 3: inject lessons service to home
  // Step 4: move lessons to service and consume in component

  title = "Hello from Angular"
  courseLessons = null;
  currentLesson = null;

  constructor(private lessonService: LessonsService) { }

  ngOnInit(): void {
    this.courseLessons = this.lessonService.getAll();
  }

  selectLesson(lesson) {
    console.log('SELECT LESSON FIRED!', lesson);
    this.currentLesson = lesson;
  }
}
