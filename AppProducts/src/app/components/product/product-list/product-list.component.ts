import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Column } from 'src/app/models/column';
import { ExportColumn } from 'src/app/models/export';
import { Product } from 'src/app/models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  

  @ViewChild('dt') dt: Table | undefined;
  cols!: Column[];
  exportColumns!: ExportColumn[];
  products!: Product[];
  openDialog: boolean = false;
  product!: Product;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private productService: ProductService
   ) {}

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts(){
    this.productService.getProductsApi().subscribe({next: response =>{
      console.log(response);
        this.products = response;

     }, error: err=>{
      this.messageService.add({ severity: 'error', summary: 'Servicio temporalmente fuera de servicio', life: 3000 });
    }
    
    });
  }

  openNew(){
    this.openDialog = true;
  }
  editProduct(product: Product){
    this.product = { ...product };
    this.openDialog = true;
  }

  deleteProduct(product: Product){
    this.confirmationService.confirm({
      message: '¿Estás seguro que deseas eliminar el producto?',
      header: '¡Eliminar el producto!',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Si seguro',
      rejectLabel: 'Cancelar',
      accept: () => {
          this.products = this.products.filter((val) => val.id !== product.id);
          this.messageService.add({ severity: 'success', summary: 'Eliminado con éxito', life: 3000 });
      }
  });
  }
}
