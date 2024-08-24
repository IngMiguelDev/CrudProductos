import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProductListComponent},
        { path: 'detail', component: ProductDetailComponent},
        { path: 'form', component: ProductFormComponent}
        
    ])],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
