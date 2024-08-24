import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Column } from 'src/app/models/column';
import { ExportColumn } from 'src/app/models/export';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  

  @ViewChild('dt') dt: Table | undefined;
  cols!: Column[];
  exportColumns!: ExportColumn[];
  products: any[] = [];
  openDialog: boolean = false;
  product!: Product;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
   ) {}

  ngOnInit(): void {
      
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
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.products = this.products.filter((val) => val.id !== product.id);
          this.messageService.add({ severity: 'success', summary: 'Eliminado con éxito', life: 3000 });
      }
  });
  }
}
