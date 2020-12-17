import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private model = "courses";
  private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor(private http: HttpClient) { }

  // CURD along with find

  create(course) {
    return this.http.post(`${BASE_URL}${this.model}`, course);
  }

  getAll() {
    return this.http.get(`${BASE_URL}${this.model}`)
  }

  find(courseId) {
    console.log("FIND COURSE: ", courseId)
  }

  update(course) {
    console.log("UPDATE COURSE: ", course)
  }

  delete(courseId) {
    console.log("DELETE COURSE: ", courseId)
  }
}
