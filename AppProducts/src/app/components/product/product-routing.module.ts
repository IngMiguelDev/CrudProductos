import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'lista-productos', loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule) },
    ])],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
