import { Injectable } from '@angular/core';

// Hands-On 7, Task 2, Step 75: hardcoded auth state backing the AuthGuard
@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = true; // hardcoded for now, per exercise instructions
}
