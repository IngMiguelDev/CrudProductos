import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './product-form.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'add', component: ProductFormComponent },
        { path: 'edit/:id', component: ProductFormComponent }
    ])],
    exports: [RouterModule]
})
export class ProductFormRoutingModule { }