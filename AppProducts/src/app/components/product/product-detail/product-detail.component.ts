import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit  {

  products!: any;
  id!: number; 

  constructor(
    private _productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { 
    
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getProductId(this.id);
  }

  getProductId(id: number){
    this._productService.getProductById(id).subscribe({next: producto=>{
      console.log('data',  producto);
      this.products = producto;
    }
   });
  }

  goBack(){
    this.router.navigate(['/product/lista-productos']);
  }
}
