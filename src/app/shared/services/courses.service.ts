import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private model = "courses";

  constructor(private http: HttpClient) { }

  // CURD along with find

  create(course) {
    return this.http.post(this.getURL(), course);
  }

  getAll() {
    return this.http.get(this.getURL())
  }

  find(courseId) {
    console.log("FIND COURSE: ", courseId)
  }

  update(course) {
    return this.http.put(this.getURLById(course.id), course);
  }

  delete(courseId) {
    console.log("FROM THE SERVICE: ", courseId);
    return this.http.delete(`${BASE_URL}${this.model}/${courseId}`);
  }

  getURL() {
    return `${BASE_URL}${this.model}`;
  }

  getURLById(id) {
    return `${this.getURL()}/${id}`;
  }
}
