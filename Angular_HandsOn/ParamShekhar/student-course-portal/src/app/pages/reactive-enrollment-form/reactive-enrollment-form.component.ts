import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { CanComponentDeactivate } from '../../guards/unsaved-changes.guard';

// Hands-On 5, Step 53: custom synchronous validator
function noCourseCode(control: AbstractControl): ValidationErrors | null {
  return typeof control.value === 'string' && control.value.startsWith('XX') ? { noCourseCode: true } : null;
}

// Hands-On 5, Step 55: custom async validator
function simulateEmailCheck(control: AbstractControl): Observable<ValidationErrors | null> {
  return of(control.value).pipe(
    delay(800),
    map((value: string) => (value?.includes('test@') ? { emailTaken: true } : null))
  );
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html'
})
export class ReactiveEnrollmentFormComponent implements OnInit, CanComponentDeactivate {
  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: this.fb.control('', [Validators.required, Validators.email], [simulateEmailCheck]),
      courseId: [null, [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  // Hands-On 5, Step 57: typed getter avoids repeated casting in the template
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  onSubmit(): void {
    // value excludes disabled controls; getRawValue() includes all controls regardless of disabled state
    console.log(this.enrollForm.value, this.enrollForm.getRawValue());
  }

  isDirty(): boolean {
    return this.enrollForm.dirty;
  }
}
