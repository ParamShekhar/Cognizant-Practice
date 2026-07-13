import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  // Hands-On 2, Task 1: binding types
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  coursesAvailable = 0;
  enrolled = 3;
  gpa = 3.8;

  constructor(private courseService: CourseService) {}

  // Hands-On 2, Task 2: lifecycle hooks
  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded');
    this.courseService.getCourses().subscribe({
      next: (courses) => (this.coursesAvailable = courses.length),
      error: () => (this.coursesAvailable = 0)
    });
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  // [property] is one-way, component -> DOM only.
  // [(ngModel)] is two-way: DOM -> component on input, component -> DOM on render.
}
