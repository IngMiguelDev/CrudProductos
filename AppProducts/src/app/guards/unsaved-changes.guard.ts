import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductFormComponent } from '../components/product/product-form/product-form.component';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Promise<boolean> | Observable<boolean>;
}

export const unsavedChangesGuard: CanDeactivateFn<ProductFormComponent> = async (component) => {
  return await component.canDeactivate();
};
