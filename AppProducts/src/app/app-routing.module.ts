import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'product', loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule) },
  { path: 'home', loadChildren: () => import('./components/presentation/presentation.module').then(m => m.PresentationModule) },
  { path: 'documentation', loadChildren: () => import('./components/documentation/documentation.module').then(m => m.DocumentationModule) },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
