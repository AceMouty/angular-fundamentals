import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  // passing data down from the parent to the child via @Input
  @Input() courses;
  // lift an event from child to parent
  // NOTE: Be sure you are getting the emitter from angular core
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
