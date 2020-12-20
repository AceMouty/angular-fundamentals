import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-detials',
  templateUrl: './course-detials.component.html',
  styleUrls: ['./course-detials.component.scss']
})
export class CourseDetialsComponent {
  selectedCourse;
  originalTitle;

  @Output() saved = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() set course(value) {
    if (value) {
      this.selectedCourse = Object.assign({}, value);
      this.originalTitle = value.title;
    }
  };

  save(form) {
    console.log("IN THE DETAILS")
    this.saved.emit({ course: this.selectedCourse, form })
  }
}
