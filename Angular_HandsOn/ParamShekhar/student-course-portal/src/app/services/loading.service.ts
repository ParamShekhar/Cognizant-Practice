import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Hands-On 8, Task 3, Step 91: backing service for the loading interceptor
@Injectable({ providedIn: 'root' })
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();

  setLoading(value: boolean): void {
    this.isLoadingSubject.next(value);
  }
}
