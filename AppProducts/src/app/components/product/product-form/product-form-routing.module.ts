import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './product-form.component';
import { unsavedChangesGuard } from '../../../guards/unsaved-changes.guard';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'add', component: ProductFormComponent },
        { path: 'edit/:id', component: ProductFormComponent, canDeactivate: [unsavedChangesGuard] }
    ])],
    exports: [RouterModule]
})
export class ProductFormRoutingModule { }