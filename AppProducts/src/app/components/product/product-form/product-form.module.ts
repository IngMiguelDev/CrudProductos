import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormRoutingModule } from './product-form-routing.module';
import { ProductFormComponent } from './product-form.component';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [ProductFormComponent],
  imports: [
    CommonModule,
    ProductFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule
  ],
  providers: [MessageService]
})
export class ProductFormModule { }
