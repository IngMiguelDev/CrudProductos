import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit{


  productForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { 
    this.initForm();
  }


  ngOnInit(): void {

  }

  initForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      price: ['', [Validators.required]],
    
    });
  }

  addProduct(){
    debugger
    console.log(this.productForm.value.name);
    // Enviar la información al backend

    const product: Product = {
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      price: this.productForm.value.price
    }

    console.log(product);
  }
}
