import { Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';
import { HighlightDirective } from '../../directives/highlight/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label/credit-label.pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {
  // Hands-On 2, Task 3: @Input / @Output parent-child communication
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  constructor(private enrollmentService: EnrollmentService) {}

  // Hands-On 2, Task 2, Step 18: log previous/current value on change
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('course changed from', changes['course'].previousValue, 'to', changes['course'].currentValue);
    }
  }

  onEnrollClick(): void {
    this.enrollRequested.emit(this.course.id);
    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }
  }

  get isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Hands-On 3, Task 2, Step 32: getter keeps the template free of inline object literals,
  // making the template easier to read and the class easier to unit test.
  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course.credits >= 4,
      expanded: this.isExpanded
    };
  }

  get borderColor(): string {
    switch (this.course.gradeStatus) {
      case 'passed': return 'green';
      case 'failed': return 'red';
      default: return 'grey';
    }
  }
}
