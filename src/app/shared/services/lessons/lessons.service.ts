import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  // lessons base state
  private lessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() { }

  createLesson(lesson) {
    console.log("CREATE LESSON: ", lesson);
  }

  getAll() {
    return this.lessons;
  }

  getLessonById(lessonId) {
    console.log("GET LESSON BY ID: ", lessonId);
  }

  updateLesson(lesson) {
    console.log("UPDATE LESSON: ", lesson);
  }

  deleteLesson(lessonId) {
    console.log("DELETE LESSON: ", lessonId);
  }

}
