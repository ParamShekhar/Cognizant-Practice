import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  isDirty(): boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
  if (component.isDirty()) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
