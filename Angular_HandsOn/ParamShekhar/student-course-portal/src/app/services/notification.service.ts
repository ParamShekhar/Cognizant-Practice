import { Injectable } from '@angular/core';

// Hands-On 6, Task 2, Step 67: provided at COMPONENT level (not root) in NotificationComponent,
// so each component instance gets its own isolated NotificationService instance.
@Injectable()
export class NotificationService {
  private messages: string[] = [];

  push(message: string): void {
    this.messages.push(message);
  }

  getAll(): string[] {
    return this.messages;
  }
}
