import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 9 Fundamentals';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' },
    { path: '/users', icon: 'supervisor_account', title: 'Users' }
  ];

  constructor(private router: Router) { }

  logout() {
    // push the user to a route
    this.router.navigateByUrl('/login');
  }
}
