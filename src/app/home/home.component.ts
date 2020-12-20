import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Challenge
  // Step 1: Create a LessonsList component
  // Step 2: Create the appropriate inputs and outputs
  // Step 3: Render LessonsList component in home

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
