import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guards/unsaved-changes.guard';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate{

  productForm!: FormGroup;
  id: number;
  operation!: string;
  
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private _productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { 
    this.initForm();
    this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  }


  ngOnInit(): void {
    if(this.id !== 0 ){
      this.operation = 'Editar'
      this.getProductId(this.id);

    }else{
      this.operation = 'Agregar'
    }
  }

  async canDeactivate(): Promise<boolean> {
    if (this.productForm.dirty) {
      const userConfirmed = await new Promise<boolean>((resolve) => {
        const confirmed = confirm('Tienes cambios sin guardar. ¿Estás seguro de que deseas salir de esta página?');
        resolve(confirmed);
      });
      return userConfirmed;
    }
    return true;
  }
  

  initForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      price: ['', [Validators.required]],
      stock: ['', ]
    
    });

  }

  getProductId(id: number){
    this._productService.getProductById(id).subscribe({next: producto=>{
      this.productForm.setValue({
        name: producto.name,
        description: producto.description,
        price: producto.price,
        stock: producto.stock_quantity
      })
    }
   });
  }


  async goBack() {
    const canDeactivate = await this.canDeactivate();
    
    if (canDeactivate) {
      
      this.router.navigate(['/product/lista-productos']);
    }
  }
  addAndEditProduct(){
    const product: Product = {
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      price: this.productForm.value.price,
      stock_quantity: this.productForm.value.stock
    }


    if(this.id !==0){
      product.id = this.id;
      this._productService.updateProductApi(product).subscribe({next:  res=>{
        this.messageService.add({severity:'info', summary: 'Producto Actualizado', detail: `El producto ${product.name} ha sido actualizado correctamente.` });

        this.productForm.markAsPristine();
        setTimeout(() => {
          this.router.navigate(['/product/lista-productos']);
        }, 1000);

      }});
    }else{
      this._productService.saveProductApi(product).subscribe({next:  res=>{
        this.messageService.add({severity:'success', summary: 'Producto Agregado', detail: `El producto ${product.name} ha sido agregado correctamente.` });
        
        setTimeout(() => {
          this.router.navigate(['/product/lista-productos']);
        }, 1000);
        
      },error: err =>{
        this.messageService.add({severity:'error', summary: 'Error', detail: 'No se pudo agregar el producto.' });
      }})
    }

    
  
  }

 
  


}
