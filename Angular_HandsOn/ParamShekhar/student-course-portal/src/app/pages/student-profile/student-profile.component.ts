import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.component.html'
})
export class StudentProfileComponent implements OnInit {
  enrolledCourses: Course[] = [];

  constructor(private courseService: CourseService, private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    const ids = this.enrollmentService.getEnrolledCourseIds();
    this.courseService.getCourses().subscribe((courses) => {
      this.enrolledCourses = courses.filter((c) => ids.includes(c.id));
    });
  }
}
