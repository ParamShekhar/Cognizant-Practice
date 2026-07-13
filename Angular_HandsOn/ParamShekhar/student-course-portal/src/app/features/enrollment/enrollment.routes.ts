import { Routes } from '@angular/router';

// Hands-On 7, Step 73: lazy-loaded feature routes
export const ENROLLMENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../pages/enrollment-form/enrollment-form.component').then((m) => m.EnrollmentFormComponent)
  },
  {
    path: 'reactive',
    loadComponent: () =>
      import('../../pages/reactive-enrollment-form/reactive-enrollment-form.component').then(
        (m) => m.ReactiveEnrollmentFormComponent
      )
  }
];
