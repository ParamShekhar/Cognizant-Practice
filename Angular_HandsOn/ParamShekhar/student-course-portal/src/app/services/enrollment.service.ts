import { Injectable } from '@angular/core';
import { CourseService } from './course.service';

// Hands-On 6, Task 2: service-to-service injection + shared enrollment state
@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private enrolledCourseIds: number[] = [];

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) this.enrolledCourseIds.push(courseId);
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter((id) => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourseIds(): number[] {
    return this.enrolledCourseIds;
  }
}
