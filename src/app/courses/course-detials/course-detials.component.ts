import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-detials',
  templateUrl: './course-detials.component.html',
  styleUrls: ['./course-detials.component.scss']
})
export class CourseDetialsComponent {
  @Input() course;
  @Output() saved = new EventEmitter();
  @Output() cancel = new EventEmitter();

  save(form) {
    console.log("IN THE DETAILS")
    this.saved.emit({ course: this.course, form })
  }
}
