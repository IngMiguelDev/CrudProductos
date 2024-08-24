import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private messageService: MessageService
  ){
    this.initForm();
  }

  initForm(){
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      stock: [null]
    });
  }

  addProduct(){
    if(this.productForm.valid){
      this.messageService.add({ severity:'success', summary: 'Producto Agregado', detail: 'El producto ha sido agregado correctamente.' });
    } else {
      this.messageService.add({ severity:'error', summary: 'Error', detail: 'Debes completar todos los campos obligatorios.' });
    }
  }
}
