import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { CoursesService } from './shared/services/courses.service';
import { LessonsService } from './shared/services/lessons/lessons.service';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseDetialsComponent } from './courses/course-detials/course-detials.component';
import { LessonsListComponent } from './home/lessons-list/lessons-list.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  // imports for modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  // declarations for components
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CourseListComponent,
    CourseDetialsComponent,
    LessonsListComponent,
    UsersComponent
  ],
  // providers for services
  providers: [
    CoursesService,
    LessonsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
