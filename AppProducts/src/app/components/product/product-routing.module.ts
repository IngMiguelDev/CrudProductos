import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'lista-productos', loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule) },
        { path: 'form', loadChildren: () => import('./product-form/product-form.module').then(m => m.ProductFormModule) },
        { path: 'detalle-producto/:id', loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule) },
        { path: '', redirectTo: 'lista-productos', pathMatch: 'full' }
    ])],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
